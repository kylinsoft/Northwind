Feature: Get Weather Forecast
	 To get the weather forecast 

Scenario: Get the weather forecast tomorrow
	Given the weather forecast 
	When I get the forecast for tomorrow
	Then the forecast temperature F should be greater than 0

Scenario: Cannot forecast the past
	Given the weather forecast
	When I get the forecast for yesterday
	Then the service should throw an invalid argument exception

Scenario: Getting summary for 70 degrees F
	Given the weather forecast
	When I get the summary for 70 degrees
	Then the summary should be Mild