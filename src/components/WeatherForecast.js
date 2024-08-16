import { useEffect, useState } from 'react';

function WeatherForecast({ setDayTime }) {
    const [currentHour, setCurrentHour] = useState(new Date().getHours());

    useEffect(() => {
        // Обновление текущего часа каждую минуту
        const timer = setInterval(() => {
            const hour = new Date().getHours();
            setCurrentHour(hour);
            setDayTime(hour >= 6 && hour < 18);  // День с 6 утра до 18 вечера
        }, 60000); // 1 минута

        // Устанавливаем начальное значение
        setDayTime(currentHour >= 6 && currentHour < 18);

        // Очистка таймера при размонтировании компонента
        return () => clearInterval(timer);
    }, [currentHour, setDayTime]);

    return null;
}

export default WeatherForecast;
