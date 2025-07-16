import {
  Cloud,
  CloudFogIcon,
  CloudLightningIcon,
  SnowflakeIcon,
  Sun,
  Umbrella,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const SUNNY = "Sunny";
const CLOUDY = "Cloudy";
const RAINY = "Rainy";
const SNOWY = "Snowy";
const STORMY = "Stormy";
const FOGGY = "Foggy";

export type WeatherType =
  | typeof SUNNY
  | typeof CLOUDY
  | typeof RAINY
  | typeof SNOWY
  | typeof STORMY
  | typeof FOGGY;

export const Weather = ({
  location,
  weather,
  temperature,
  date = new Date().toLocaleDateString(),
}: {
  location: string;
  weather: WeatherType;
  temperature: number;
  date: string;
}) => {
  const getWeatherIcon = (weather: WeatherType) => {
    switch (weather) {
      case SUNNY:
        return <Sun className="size-20" />;
      case CLOUDY:
        return <Cloud className="size-20" />;
      case RAINY:
        return <Umbrella className="size-20" />;
      case SNOWY:
        return <SnowflakeIcon className="size-20" />;
      case STORMY:
        return <CloudLightningIcon className="size-20" />;
      case FOGGY:
        return <CloudFogIcon className="size-20" />;
      default:
        return <Sun className="size-20" />;
    }
  };
  return (
    <Card className="w-48 border-none overflow-hidden relative">
      <CardHeader>
        <CardTitle>{location}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="absolute top-[-10px] right-[-10px] text-stone-300">
          {getWeatherIcon(weather)}
        </span>
        <p>Condition: {weather}</p>
        <p>Temperature: {temperature}°C</p>
      </CardContent>
    </Card>
  );
};
