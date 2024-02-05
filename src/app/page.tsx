"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { useQuery } from "react-query";

interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=riga&appid=${process.env.NEXT_PUBLIC_WEATER_KEY}=56`
      );
      return data;
    }
    // fetch(
    //   "http://api.openweathermap.org/data/2.5/forecast?q=riga&appid=68c631402ae5c12514f5089b905d7458&cnt=56"
    // ).then((res) => res.json())
  );

  console.log("data", data?.city.country);

  if (isLoading) return "Loading...";
  return (
    <div className="flex flex-col gap-4 bg-gray-100 mi-h-screen">
      <Navbar />
    </div>
  );
}
