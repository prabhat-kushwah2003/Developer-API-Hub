import axios from "axios";

export const getCountry = async (req, res) => {
  try {
    const { name } = req.params;

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`,
    );
    const country = response.data[0];

    res.json({
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flag.png,
    });
  } catch (error) {
    res.status(500).json({
      message: "Country not found",
    });
  }
};

export const getWeather = async (req, res) => {
  try {
    const { city } = req.params;

    const apiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({
      message: "Weather data not found",
    });
  }
};
