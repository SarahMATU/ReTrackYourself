const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electron', {
    openTimerWindow: () => {
        ipcRenderer.send('open-timer-window');
    },

    openTodoWindow: () => {
        ipcRenderer.send('open-todo-window');
    },

    openReminderWindow: () => {
        ipcRenderer.send('open-reminder-window');
    },

    setTime: () => {
        ipcRenderer.send('set-time');
    },

    getTime: () => {
        ipcRenderer.send('get-time');
    }
})