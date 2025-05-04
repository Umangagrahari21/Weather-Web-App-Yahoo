import SearchBox from "./SearchBox";
import Infobox from './Infobox';
import {useState} from "react";

export default function WeatherAdd9(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike:24.44,
        temp:25,
        tempMin:24.96,
        tempMax:25.02,
        humdity:58,
        weather:"haze",
    });

    let updateInfo=(newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"GrayText"}}>Weather App by Yahoo</h2>
            <SearchBox updateInfo={updateInfo}/>
             <Infobox Info={weatherInfo}/>
        </div>
    );
}