import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './infobox.css';

export default function Infobox({Info}){
    const INIT_URL="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg"
    let COLD_URL="https://live.staticflickr.com/65535/50933491436_a2f4a3859c_b.jpg"
    let HOT_URL="https://thumbs.dreamstime.com/b/hot-weather-summer-heat-stuffy-street-warm-sunlight-outdoor-warmth-blazing-air-bright-sky-rising-pressure-human-hot-weather-summer-372810492.jpg"
    let RAIN_URL="https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg"

    return(
        <div className="Infobox"> 
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
          <CardMedia
           sx={{ height: 140 }}
          image={Info.humidity>45?
            RAIN_URL:
            Info.temp>14?
            HOT_URL:
            COLD_URL
          }
          title="green iguana"
          />
         <CardContent>
         <Typography gutterBottom variant="h5" component="div">
          {Info.city}{
            Info.humidity>45?
            <ThunderstormIcon/>:
            Info.temp>14?
            <SunnyIcon/>:
            <AcUnitIcon/>
          }       
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>temperature:{Info.temp}&deg;C</p>
         <p>Humidity:{Info.humdity}</p>
         <p>Min Temp:{Info.tempMin}&deg;C</p>
         <p>Max Temp:{Info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{Info.weather}</i> and feels like:{Info.feelsLike}&deg;C</p>
          </Typography>
         </CardContent>
         </Card>
            </div>
        </div>
    );
}