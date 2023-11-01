const { BrowserWindow, app } = require('electron')
const path = require('path')
app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        alwaysOnTop: true,
        x: 1800,
        y: 100
    })
    // mainWindow.loadURL('https://www.baidu.com') //加载页面
    mainWindow.webContents.toggleDevTools()//自动打开开发者工具
    mainWindow.loadFile(path.resolve(__dirname, 'index.html')) //加载本地文档
})