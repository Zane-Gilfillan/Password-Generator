# Password Generator

The current build of this app is utilizing SASS as well as Javascript to run the password generation. I really wanted to work on more SASS so i decided to build this app fully in the browser and not through ```alert``` funtions in Javascript

![final project](img/final.png)


A main pillar of the Javascript functionality was learning about 
```
string.fromCharCode()
```
more documentaion can be found on it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

and the documentation for what ```string.fromCharCode()``` targets can be found here: https://www.ascii-code.com/

in ```getRandomSymbol``` i just created a variable of some symbols that i wanted to use becuase they weren't in sequecial order in the ASCII documentaion

Another important piece to this puzzle was using ```Object()``` and ```Object.keys()``` to be able to not only randomoize the arrays of the letters, numbers, and symbols, but also the elements inside of them. 

documentation can be found on that here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object & https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


There as a point where the password that was generated wasn't 'truly' random, as it would randomly select a character from "lowercase, uppercase, numbers, symbols" in that order. so if you selected "lower and numbers" the password would look like "d8g5n9w". In otherwords: a repeatable pattern. I found this question via stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

and it seemed to pin point the issue. I eventually got with this working code:

```
for(let i = 0; i<length; i++) {
        const randomChoie = Math.floor(Math.random() * typesArr.length);
        genereatedPassword += randomFunctions[Object.keys(typesArr[randomChoie])]();
    }
}
```


I also came across a bug where users were able to bypass the min/max of the 'password length' by not using the up and down arrows and just manually entering in a number. I set alerts to ask the user to stay within the parameters and then reset the application.