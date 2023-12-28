package main

import "fmt"

// FavoriteCards returns a slice with the cards 2, 6 and 9 in that order.
func FavoriteCards() []int {
	cards := []int{2, 6, 9}
	return cards
}

// GetItem retrieves an item from a slice at given position.
// If the index is out of range, we want it to return -1.
func GetItem(slice []int, index int) int {
	if index < 0 || index >= len(slice) {
		return -1
	}
	itemIndex := slice[index]
	return itemIndex
}

// SetItem writes an item to a slice at given position overwriting an existing value.
// If the index is out of range the value needs to be appended.
func SetItem(slice []int, index, value int) []int {
	// check if out of bounds
	if index < 0 || index >= len(slice) {
		// if so append the value to the slice
		slice = append(slice, value)
	} else {
		// if in bounds assign the value to the index
		slice[index] = value
	}
	return slice
}

// PrependItems adds an arbitrary number of values at the front of a slice.
func PrependItems(slice []int, values ...int) []int {
	return append(values, slice...)
}

// RemoveItem removes an item from a slice by modifying the existing slice.
func RemoveItem(slice []int, index int) []int {
	// check if out of bounds
	if index < 0 || index >= len(slice) {
		return slice
	} else {
		return append(slice[:index], slice[index+1:]...)
	}
}

func main() {
	// Test FavoriteCards
	fmt.Println("FavoriteCards: ", FavoriteCards())

	// Test GetItem
	slice := []int{1, 2, 3, 4, 5}
	fmt.Println("GetItem: ", GetItem(slice, 2))
	fmt.Println("GetItem: ", GetItem(slice, 6))

	// Test SetItem
	slice = []int{1, 2, 3, 4, 5}
	fmt.Println("SetItem: ", SetItem(slice, 2, 9))
	fmt.Println("SetItem: ", SetItem(slice, 6, 9))

	// Test PrependItems
	slice = []int{1, 2, 3, 4, 5}
	fmt.Println("PrependItems: ", PrependItems(slice, 9, 8, 7))

	// Test RemoveItem
	slice = []int{1, 2, 3, 4, 5}
	fmt.Println("RemoveItem: ", RemoveItem(slice, 2))
	fmt.Println("RemoveItem: ", RemoveItem(slice, 6))
}
