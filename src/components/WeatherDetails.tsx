import React from "react";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

export interface WeatherDetailProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    visability = "NA",
    humidity = "NA",
    windSpeed = "NA",
    airPressure = "NA",
    sunrise = "NA",
    sunset = "NA",
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Visability"
        value={props.visability}
      />
      <SingleWeatherDetail
        icon={<FiDroplet />}
        information="Humidity"
        value={props.humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind speed"
        value={props.windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air pressure"
        value={props.airPressure}
      />
      <SingleWeatherDetail
        icon={<LuSunrise />}
        information="Sunrise"
        value={props.sunrise}
      />
      <SingleWeatherDetail
        icon={<LuSunset />}
        information="Sunset"
        value={props.sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
