import React from 'react';

function Timer() {

    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');

    const getTimeLeft = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);

        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeLeft(e);

        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':'
                + (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer('01:23:45')

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)

        Ref.current = id;
    }

    return (
        <div className="App">
            <div>
                <h2>{timer}</h2>
                this is the timer
            </div>
        </div>
    );
}

export default Timer;