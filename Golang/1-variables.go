package main

import "fmt"

func main() {

	var message = "Hello Golang!"
	fmt.Println(message)

	message = "Hello Python!"
	fmt.Println(message)

	var name string = "Venkata"
	var age int
	var isMale bool
	fmt.Println(name, age, isMale)

	pet1 := "dog"
	fmt.Println(pet1)

	pet2, pet3, pet4 := "cat", "parrot", "rabbit"
	fmt.Println(pet2, pet3, pet4)

	pet5, pet3 := "pet5", "pet3"
	fmt.Println(pet5, pet3)

	//Constants
	const pi = 3.14
	fmt.Println(pi)

}
