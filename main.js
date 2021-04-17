// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, webContents, session } = require('electron')
const path = require('path')
const url = require('url')
const { ipcMain, dialog } = require('electron')
var fs = require('fs')
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow
let downloadpath
let loadpath
function createWindow() {
    //创建浏览器窗口,宽高自定义具体大小你开心就好

    mainWindow = new BrowserWindow({
        width: 1440,
        height: 1024 + 22,
        transparent: true,
        icon: './favicon.ico',
        //frame: false,
        titleBarStyle: 'default',
        allowRunningInsecureContent: true,
        experimentalCanvasFeatures: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true, // 是否集成 Nodejs
        },
        webContents: {
            openDevTools: true,
        }
    })
    /* 
    * 加载应用----- electron-quick-start中默认的加载入口
    mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
    }))
    */
    // 加载应用----适用于 react 项目
    mainWindow.loadURL('http://localhost:3000/');

    // 打开开发者工具，默认不打开
    // mainWindow.webContents.openDevTools()
    // 关闭window时触发下列事件.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
    session.defaultSession.on('will-download', (event, item) => {
        const fileName = item.getFilename();//获取文件名称
        const url = item.getURL();//获取文件下载路径
        const startTime = item.getStartTime();//获取文件开始下载时间
        const initialState = item.getState();//获取文件下载状态
        const downloadPath = loadpath;
        let savePath = path.join(downloadPath, fileName);
        const ext = path.extname(savePath);//返回文件后缀名（包括.）
        const name = path.basename(savePath, ext);//返回文件名的最后一部分，若无第二个参数，则返回最后一部分（含后缀），若含第二参数，则将返回部分中对应部分删去
        const dir = path.dirname(savePath);//返回文件保存目录
        let fileNum = 0
        while (fs.existsSync(savePath)/*文件后缀名逻辑自增*/) {
            fileNum += 1;
            savePath = path.format({
                dir,
                //root
                //base
                name: `${name}(${fileNum})`,
                ext,
            });
        }
        item.setSavePath(savePath);
        mainWindow.webContents.send('new-download-item', {
            savePath,
            url,
            startTime,
            state: initialState,
            paused: item.isPaused(),
            totalBytes: item.getTotalBytes(),
            receivedBytes: item.getReceivedBytes(),
            filename: name,
        });
        item.on('updated', (e, state) => {//500ms自动发送一次
            if (state === 'interrupted') { }//是否中断
            else if (state === 'progressing') {
                ipcMain.on('pause', (event, sth) => {
                    if (sth.StartTime === startTime) {
                        item.pause()
                    }
                })
                ipcMain.on('AllPause', (event) => {
                    item.pause()
                })
                ipcMain.on('cancel', (event, sth) => {
                    if (sth.StartTime === startTime) {
                        item.cancel()
                        mainWindow.webContents.send('download-item-updated', {
                            startTime,
                            state,
                            totalBytes: 0,
                            receivedBytes: 1,
                            paused: item.isPaused(),
                            filename: item.getFilename(),
                        })
                    }
                })
                if (item.isPaused()) {
                    ipcMain.once('resume', (event, sth) => {
                        if (sth.StartTime === startTime) {
                            item.resume()
                        }
                    })
                    ipcMain.once('AllResume', (event) => {
                        item.resume()
                    })
                }
                else {
                    mainWindow.webContents.send('download-item-updated', {
                        startTime,
                        state,
                        totalBytes: item.getTotalBytes(),
                        receivedBytes: item.getReceivedBytes(),
                        paused: item.isPaused(),
                        filename: item.getFilename(),
                    })
                }
            }
        });
        item.on('done', (e, state) => {//下载完成
            mainWindow.webContents.send('download-item-done', {
                startTime,
                state,
            });
        });
    })
}
// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)
// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
    // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
    if (mainWindow === null) {
        createWindow()
    }
})
// 你可以在这个脚本中续写或者使用require引入独立的js文件.
ipcMain.on('download', (event, args) => {
    var arr = args.split("+")
    downloadpath = arr[0]
    loadpath = arr[1]
    mainWindow.webContents.downloadURL(downloadpath)
    //触发will-download事件
})
ipcMain.on('dialog', (event) => {
    const paths = dialog.showOpenDialogSync({
        title: '选择文件存放目录',
        properties: ['openDirectory'],
    })
    if (paths && paths.length) {
        mainWindow.webContents.send('downloadPath', paths[0])
    }
})