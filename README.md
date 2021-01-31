# Roboger's Neighborhood
#### Independent project #3 for Epicodus 
#### Project initiated: 01-22-2021
#### Project modified: 01-30-2021
#### By Sofia Acosta 
## Project Description
This is my indepentent project to showcase the lesson learned last week: Arrays and Loops. It is an application that will take a number from a user and will return a range of numbers and statements using arrays and loops. A user should be able to enter a new number and see different results over and over again. 
## Specs

```
Describe: numberArray()
Test: "It should return an array of numbers from 0 to the inputted number the user"
Expect(numberArray(3)).toEqual(["0", "1","2","3"]);

Describe: getResults()
Test:"Replace numbers with 1 with "Beep!""
Expect(getResults(1)).toEqual(["0", "Beep"])

Describe: getResults()
Test:"Replace numbers with 2 with "Boop!""
Expect(getResults(2)).toEqual(["0", "Beep", "Boop!"])

Describe: getResults()
Test:"Replace numbers with 3 with "Won't you be my neighbor""  
Expect(getResults(3)).toEqual(["0", "Beep", "Boop!", "Won't you be my neighbor"])

Describe: getResults()
Test:"Mantain a hierarchy within the exception rules (3s trump 2s trump which trump 1s"")
Expect(getResults(13)).toEqual("0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7","8","9","Beep!","Beep!","Boop!","Won't you be my neighbor?")

```

## Technologies Used
* HTML
* Javascript
* CSS
* JQuery
## Set up / Installation requirements
* Download a .zip copy of this repository:https://github.com/Sofacosta/programming-language-suggester by clicking the green "code" button. 
* Launch the index.html file into your browser
 
OR
 
* Open your terminal and navigate to the folder where you would like to save this project
* Clone this repository in your terminal: $ git clone
* Go to the top level of the repository: $ cd programming-language-suggester
* Open index.html into your browser: $ open index.html

## Known Bugs 
* No known bugs
## Notes
* [Creating and highlighting code blocks](https://docs.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks)
* In order to compare each number, we convert the number to a string using the toString method and then check it using the includes method. [Reference](https://www.w3schools.com/jsref/jsref_includes.asp#:~:text=The%20includes()%20method%20determines,()%20method%20is%20case%20sensitive.)  
## License
* [MIT](https://choosealicense.com/licenses/mit)
* Copyright 2021 Sofia Acosta
## Contact
Sofia Acosta sofiaacostarascon@gmail.com
