package techpalace

import (
	"fmt"
	"strings"
)

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	return fmt.Sprintf("Welcome to the Tech Palace, %s", strings.ToUpper(customer))
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	return fmt.Sprintf("%s\n%s\n%s",
		strings.Repeat("*", numStarsPerLine),
		welcomeMsg,
		strings.Repeat("*", numStarsPerLine))
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	cleanMsg := strings.ReplaceAll(oldMsg, "*", "") // remove stars
	return strings.TrimSpace(cleanMsg)              // remove leading and trailing whitespaces
}
