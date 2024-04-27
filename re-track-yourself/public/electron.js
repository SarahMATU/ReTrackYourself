const path = require("node:path");
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = app.isPackaged ? require('electron-is-dev') : false;

function createMainWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		title: "Re-Track Yourself",
		maxWidth: 800,
		minWidth: 800,
		width: 800,
		maxHeight: 500,
		minHeight: 500,
		height: 500,
		webPreferences: {
			nativeWindowOpen: true,
			nodeIntegration: true,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js"),
		},
	});

	win.removeMenu();

	// and load the index.html of the app.
	win.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "./index.html")}`
	);

	win.setIcon(path.join(__dirname, "icon.ico"))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createMainWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createMainWindow();
	}
});

ipcMain.on("open-timer-window", () => {
	const winTimer = new BrowserWindow({
		title: "Timer",
		maxWidth: 270,
		width: 270,
		maxHeight: 150,
		height: 150,
		alwaysOnTop: true,
		webPreferences: {
			nativeWindowOpen: true,
			nodeIntegration: true,
		},
	});
	
	winTimer.removeMenu();

	const timerURL = isDev
		? "http://localhost:3000//todo#/timer"
		: `file://${path.join(__dirname, "./index.html")}`;

	winTimer.loadURL(timerURL);
	winTimer.setIcon(path.join(__dirname, "icon.ico"))
	winTimer.webContents.openDevTools({ mode: "detach" })	

});


ipcMain.on("open-todo-window", () => {
	const winTodo = new BrowserWindow({
		title: "To-Do",
		maxWidth: 400,
		width: 400,
		maxHeight: 600,
		height: 600,
		alwaysOnTop: true,
		webPreferences: {
			nativeWindowOpen: true,
			nodeIntegration: true,
		},
	});

	winTodo.removeMenu();

	const todoURL = isDev
		? "http://localhost:3000//todo#/todo"
		: `file://${path.join(__dirname, "./index.html")}`;

	winTodo.loadURL(todoURL);
	winTodo.setIcon(path.join(__dirname, "icon.ico"))
});

ipcMain.on("open-reminder-window", () => {
	const winReminder = new BrowserWindow({
		title: "Reminder",
		maxWidth: 270,
		width: 270,
		maxHeight: 150,
		height: 150,
		alwaysOnTop: true,
		webPreferences: {
			nativeWindowOpen: true,
			nodeIntegration: true,
			preload: path.join(__dirname, "preload.js"),
		},
	});

	winReminder.removeMenu();
	const reminderURL = isDev
		? "http://localhost:3000//todo#/reminder"
		: `file://${path.join(__dirname, "./index.html")}`;

	winReminder.loadURL(reminderURL);
	winReminder.setIcon(path.join(__dirname, "icon.ico"))
	winReminder.webContents.openDevTools({ mode: "detach" })	

});

ipcMain.on("open-break-window", () => {
	const winBreak = new BrowserWindow({
		title: "Break Time",
		maxWidth: 700,
		minWidth: 700,
		width: 700,
		maxHeight: 400,
		minHeight: 400,
		height: 400,
		alwaysOnTop: true,
		webPreferences: {
			nativeWindowOpen: true,
			nodeIntegration: true,
		},
	});

	winBreak.removeMenu();

	const breakURL = isDev
		? "http://localhost:3000//todo#/break"
		: `file://${path.join(__dirname, "./index.html")}`;

	winBreak.loadURL(breakURL);
	winBreak.setIcon(path.join(__dirname, "icon.ico"))

});
