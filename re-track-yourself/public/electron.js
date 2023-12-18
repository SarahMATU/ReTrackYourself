const path = require('node:path');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

function createMainWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        title: "Re-Track Yourself",
        maxWidth: 800,
        minWidth: 800,
        width: 800,
        maxHeight: 550,
        minHeight: 550,
        height: 550,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });

    win.removeMenu()

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, './index.html')}`
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
        alwaysOnTop: true,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },

        
    });

    winTimer.removeMenu()
    
    winTimer.loadFile('src/components/timer/timer.html');

    //winTimer.webContents.openDevTools({ mode: "detach" })
})

ipcMain.on('open-todo-window', () => {
    const winTodo = new BrowserWindow({
        maxWidth: 300,
        width: 300,
        maxHeight: 600,
        height: 600,
        alwaysOnTop: true,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });

    winTodo.removeMenu()

    winTodo.loadFile('src/components/todo/todo.html');

    //winTodo.webContents.openDevTools({ mode: "detach" })
})

ipcMain.on('open-reminder-window', () => {
    const winReminder = new BrowserWindow({
        maxWidth: 300,
        width: 300,
        maxHeight: 600,
        height: 600,
        alwaysOnTop: true,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });

    winReminder.removeMenu()
    
    winReminder.loadFile('src/components/reminder/reminder.html');

    //winReminder.webContents.openDevTools({ mode: "detach" })
})