export default (...args) => {
    const path = [...args];

    return path.map(x => x.replace(/(^\/|\/$)/g, '')).join('/');
}