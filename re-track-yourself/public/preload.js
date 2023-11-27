const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electron', {
    openTimerWindow: () => {
        ipcRenderer.send('open-timer-window');
    },

    openTodoWindow: () => {
        ipcRenderer.send('open-todo-window');
    }
})