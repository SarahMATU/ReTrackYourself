const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

function createMainWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        title: "Re-Track Yourself",
        maxWidth: 800,
        minWidth: 800,
        width: 800,
        maxHeight: 700,
        minHeight: 700,
        height: 700,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../src/App.js')}`
    );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createMainWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

ipcMain.on('open-timer-window', () => {
    const winTimer = new BrowserWindow({
        maxWidth: 300,
        width: 300,
        maxHeight: 200,
        height: 200,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },

        
    });

    winTimer.removeMenu()
    
    winTimer.loadFile('src/components/timer/timer.js');

    winTimer.webContents.openDevTools({ mode: "detach" })
})

ipcMain.on('open-todo-window', () => {
    const winTodo = new BrowserWindow({
        maxWidth: 300,
        width: 300,
        maxHeight: 600,
        height: 600,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });

    winTodo.removeMenu()

    winTodo.loadURL(`file://${path.join(__dirname, '../src/components/timer/timer.js')}`);
    
    //winTodo.loadFile('src/components/todo/todo.js');

    winTodo.webContents.openDevTools({ mode: "detach" })
})