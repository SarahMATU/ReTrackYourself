const path = require('path');
const { app, BrowserWindow } = require('electron');
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
            nodeIntegration: true
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../src/App.js')}`
    );

    win.webContents.openDevTools({ mode: "detach" })
    
}

//  export default function createTimerWindow(){

//     const winTimer = new BrowserWindow({
//         maxWidth: 200,
//         width: 200,
//         maxHeight: 300,
//         height: 300,
//         webPreferences: {
//             nativeWindowOpen: true,
//             nodeIntegration: true
//         },
//     });

    //winTimer.removeMenu()
    // and load the index.html of the app.
    // win.loadFile("index.html");
//     winTimer.loadURL(`file://${path.join(__dirname, '../src/components/timer/timer.js')}`
//     );
// }

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