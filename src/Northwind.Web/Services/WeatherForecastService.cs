using System;
using Northwind.Web.Models;

namespace Northwind.Web.Services
{
    public interface IWeatherForecastService
    {
        WeatherForecast ForecastFor(DateTime dateTime);

        string SummaryFor(int temperature);
    }


    public class WeatherForecastService : IWeatherForecastService
    {
        private static readonly string[] Summaries = new[]
        {
                "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly IDateService dateService;

        public WeatherForecastService(IDateService dateService)
        {
            this.dateService = dateService;
        }

        public WeatherForecast ForecastFor(DateTime dateTime)
        {
            if (DateTime.Compare(dateTime, dateService.GetCurrentDate()) < 0)
            {
                throw new ArgumentException("Cannot forecast the past");
            }

            var rng = new Random();

            //This randomness factor will be problematic to test, given that test run will generate a different result.
            //Because the range goes from -20 to 55, that means that in some cases the "passing test" case will fail.
            //I tried to re-create that scenario by setting temperatureC to be -20, and I got a failing test case.

            var temperatureC = rng.Next(-20, 55);
            // var temperatureC = -20;
            return new WeatherForecast
            {
                Date = dateTime,
                TemperatureC = temperatureC,
                Summary = SummaryFor(temperatureC)
            };
        }

        public string SummaryFor(int temperatureF)
        {
            double tempC = (temperatureF - 32) * .5556;
            if (tempC < -10)
            {
                return Summaries[0];
            }
            if (tempC < 0)
            {
                return Summaries[1];
            }
            if (tempC < 10)
            {
                return Summaries[2];
            }
            if (tempC < 15)
            {
                return Summaries[3];
            }
            if (tempC < 22)
            {
                return Summaries[4];
            }
            if (tempC < 28)
            {
                return Summaries[5];
            }
            if (tempC < 30)
            {
                return Summaries[6];
            }
            if (tempC < 33)
            {
                return Summaries[7];
            }
            if (tempC < 35)
            {
                return Summaries[8];
            }
            
            return Summaries[9];
        }
    }

}