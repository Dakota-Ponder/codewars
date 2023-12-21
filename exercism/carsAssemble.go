package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * (successRate / 100)
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	carsPerHour := CalculateWorkingCarsPerHour(productionRate, successRate)
	return int(carsPerHour / 60)
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	// drop the last digit
	firstDigits := carsCount / 10
	lastDigit := carsCount % 10
	return uint(firstDigits*95000) + uint(lastDigit*10000)
}
