using System;

namespace Northwind.Web.Services
{
    public interface IDateService
    {
        DateTime GetCurrentDate();
    }

    public class DateService : IDateService
    {
        public DateTime GetCurrentDate()
        {
            return DateTime.Now;
        }
    }
}