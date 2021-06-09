# Specs
* It will add "way" to the end of words that begin with a vowel.
* It will move one or more consonants from the beginning of a word, up to the first vowel, to the end of the word and add "ay".
* If the first consonants include 'qu', they will both be moved to the end of the word before adding "ay" per the previous rule.
# Tests

Describe: pigLatin()

```
Test: "It will output in lowercase"
Code: pigLatin("AAAYYY");
Expected Output:"aaayyy"
```
```
Test: "It will add 'way' to the end of a word that is a vowel."
Code: pigLatin("a");
Expected Output:"away"
```
```
Test: "It will add 'way' to the end of a word that is a vowel regardless of capitalization."
Code: pigLatin("A");
Expected Output:"away"
```
```
Test: "It will add 'way' to the end of a word that begins with a vowel."
Code: pigLatin("Arnie");
Expected Output:"arnieway"
```
```
Test: "It will add 'way' to the end of each word that begins with a vowel in a string with mutliple words."
Code: pigLatin("Arnie owns orange avocados");
Expected Output:"arnieway ownsway orangeway avocadosway"
```

```
Test: "It will move consonants from the beginning of a word, up to the first vowel, to the end of that word and add "ay"."
Code: pigLatin("truck");
Expected Output:"ucktray"
```

```
Test: If the first consonants include 'qu', they will both be moved to the end of the word before adding "ay".
Code: pigLatin("queen");
Expected Output:"eenquay"
```


https://replit.com/join/jcvlcofmwe-mireie