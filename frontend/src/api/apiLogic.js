const data = {
  location: {
    name: "Mumbai",
    region: "Maharashtra",
    country: "India",
    lat: 18.975,
    lon: 72.826,
    tz_id: "Asia/Kolkata",
    localtime_epoch: 1731085383,
    localtime: "2024-11-08 22:33",
  },
  current: {
    last_updated_epoch: 1731085200,
    last_updated: "2024-11-08 22:30",
    temp_c: 29.2,
    temp_f: 84.6,
    is_day: 0,
    condition: {
      text: "Overcast",
      icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
      code: 1009,
    },
    wind_mph: 7.6,
    wind_kph: 12.2,
    wind_degree: 336,
    wind_dir: "NNW",
    pressure_mb: 1012.0,
    pressure_in: 29.88,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 55,
    cloud: 0,
    feelslike_c: 32.3,
    feelslike_f: 90.1,
    windchill_c: 28.9,
    windchill_f: 84.0,
    heatindex_c: 31.8,
    heatindex_f: 89.2,
    dewpoint_c: 21.5,
    dewpoint_f: 70.7,
    vis_km: 3.0,
    vis_miles: 1.0,
    uv: 0.0,
    gust_mph: 12.0,
    gust_kph: 19.4,
  },
};

console.log(data["current"]["pressure_in"]);
console.log(data["current"]["wind_kph"]);
