/*import { useEffect, useState } from 'react';*/
import './App.css';
import ChessBoard from './chessBoard/ChessBoard';

//interface Forecast {
//    date: string;
//    temperatureC: number;
//    temperatureF: number;
//    summary: string;
//}

function App() {
    //const [forecasts, setForecasts] = useState<Forecast[]>();

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

    return (
        <div>
            <ChessBoard/>
        </div>
    );

    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    setForecasts(data);
    //}
}

export default App;