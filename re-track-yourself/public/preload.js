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

    // setTimer: (setTime) => {
    //     ipcRenderer.send('set-time', setTime);
    // },

    // sendTimer: (setTime) => {
    //     ipcRenderer.on('set-time-reply', (event, receivedTime) => {
    //         console.log('Received setTime from main process:', receivedTime);
    //         // Update the time state with the received value
    //         setTime(receivedTime);
    //     })
    // }

    
})