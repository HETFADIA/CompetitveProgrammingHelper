<p align="center">Click below to use Competitive Programming Helper</p>
<p align="center">
https://hetfadia.github.io/CompetitveProgrammingHelper/
</p>

<p align="center">
  
  <p align = "center">
    <a href="https://github.com/HETFADIA/CompetitveProgrammingHelper"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/HETFADIA/CompetitveProgrammingHelper/issues/new">Report Bug</a>
    
  </p>
</p>
<br>
<br>
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#About">About</a></li>
    <li><a href="#howtorun">Instructions on How to Run</a></li>
    <li><a href="#input">Input features</a></li>
    <li><a href="#algoused">Algorithms Used</a></li>
    <li><a href="#Features">Features</a></li>
    <li><a href="#Warnings">Warnings</a></li>
    <li><a href="#ScreenShots">ScreenShots</a></li>
    
  </ol>
</details>

<p id="About"><p>

## About The Project

<p>You can create Random Arrays, Random Permutations, Primes, PrimesCount, NextPrimes, PreviousPrimes, Prime Factors of Numbers in a Given Range, Random Trees of N nodes, Approx Time for a program, Memory used by a Program etc using this project.</p>
<p>The Generated output can be used to test a code, hack a code, debug a code easily and in no time.</p>
<p>The output can also determine the time the code would take when submitted so that we can determine whether it is TLE or not.</p>
<p>Using the above functionalities we can also simple test cases, worst test cases etc</p>

<p id="howtorun"></p>

## Instructions on How to Run

<p>Go to the github pages link</p>
<p>Enter the numbers or array size in the input boxes</p>
<p>The input boxes automatically evaluates the input.</p>
<p>You can see the output by pressing enter</p>
<p>Click on Generate button to generate the output(arrays or permutations or prime factors).</p>
<p>Click on clear button to reset the generated output.</p>

<p id="input"></p>

## Input Features

The program automatically evaluates the input.

- `10**5` Evaluated as pow(10,5)
- `1e7` Evaluated as 10000000
- `2*(10*3)/2` Evaluated as its value ie. 30
- `logstar(a,b)` Evaluated as iterative logarithm of a to the base b
- `iterlog(a,b)` Evaluated as iterative logarithm of a to the base b
- `exp(3)` Evaluated as e raised to 3= 20.08
- `pi` Evaluated as pi(pi, Pi, PI, pI all works here)
- `e` Evaluated as e ie 2.73
- `sin(1)` Evaluated as sin of 1 radian
- `cos(1)` Evaluated as cos of 1 radian
- `tan(1)` Evaluated as tan of 1 radian
- `pow(10,5)` Evaluated as 10\*\*5
- `sqrt(100)` Evaluated as 10
- `cbrt(1000)` Evaluated as 10
- `log(1000)` Evaluated as Math.log(1000)=6.9
- `log2(1000)` Evaluated as Math.log2(1000)=9.96
- `log10(1000)` Evaluated as Math.log10(1000)=3
- `mex(a)` Evaluated to the mex of the array a

The Program also evaluates these python features

- `pow(a,b,c)` Evaluated as (a\*\*b)%c
- `chr(a)` Evaluated as the character having ascii value a
- `ord(a)` Evaluated as the ascii value of a
- `bin(a)` Evaluated as string of binary representation of a
- `oct(a)` Evaluated as string of octal representation of a
- `hex(a)` Evaluated as string of hexadecimal representation of a
- `float(a)` Evaluated as the float form of a
- `int(a)` Evaluated as the integral form of a
- `int(a,0)` Evaluated to integer form of a by automatically detecting base of a
- `int(a,b)` Evaluated to the value of a in base b (eg int("100",2)=4)
- `len(a)` Evaluated to the length of the object
- `factorial(a)` Evaluated to the factorial of the number
- `sorted(a,reverse=True)` Sorts the array according to reverse argument
- `keys(a)` Returns the keys of the dictionary object
- `values(a)` Returns the values of the dictionary object
- `bit_length(a)` Returns the number of significant bits in the binary representation of the number a
- `Counter(a)` Returns the key value pair of the array a
- `count(a,b)` Returns the number of occurences of b in the array a
- `range` Returns the list of python range function
- `list(a)` Returns list of the object a
- `reversed(a)` Returns the reversed list of the object a
- `join(a,b)` Returns the "b".join(a) ie joins b within each consequitive items of a

The program also evaluates these c++ features

- `setb(a)` Returns the count of 1 in the 64 bit binary representation of the number a
- `msb(a)` Returns the most significant bits in the 64 bit binary representation of the number a
- `rb(a)` Returns the decimal value of rightmost bit in the 64 bit binary representation of the number a
- `rbm(a)` Returns the rightmost bit in the 64 bit binary representation of the number a
- `sorta(a)` Sorts the array a in ascending order
- `sortd(a)` Sorts the array a in descending order
- `__gcd(a,b)` Returns the gcd of a and b
- `__builtin_popcountll(a)` Returns the count of 1 in the 64 bit binary representation of the number a
- `__builtin_parityll(a)` Returns the parity of count of 1 in the 64 bit binary representation of the number a
- `__builtin_clzll(a)` Returns the number of leading zeros in the 64 bit binary representation of the number a
- `__builtin_ctzll(a)` Returns the number of trailing zeros in the 64 bit binary representation of the number a
- `is_sorted(a)` Returns true if a is ascending sorted else false
- `swap(a,b)` Swaps a and b

<p>
  Many other expressions are also evaluated by writing Math.atan, Math.acos etc.
</p>
<p>
  Thus any integer expression in any of the input boxes can be replaced by 1e7, log2(3) and the program will work fine.
</p>

<p id="algoused"></p>

## Algorithms used

<p>
Sieve Of Erantosthenes: Sieve is used to find whether Integers in a large interval are prime or not.
</p>
<p>
Sieve Prime Factorization(spf): SPF is used in the prime factorization of integers in a large interval.
</p>
<p>
Prufer Sequence is used to generate random tree.
</p>
<p>
The Program automatically detects whether SPF and Sieve can fasten the code. If they can save time using them then Sieve or SPF are used respectively.
</p>

## Features

<p>The program input accepts integers as well as scientific notations.</p>
<p>The Test cases generator also gives a colored output.</p>

## Warning

<p>
The program input currently only generates array of integers in random integers.
</>
<p>
For using string and characters in sort, you have to input manually like 'a' 'abc' 'str' 't'
</p>

<p id="ScreenShots"></p>

## Screen Shots

Here are the few Screenshots

<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/array.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/permutation.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/prevprimes.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/primeFactorsRange.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/primesRange.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/primecount.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/memory.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/CompetitveProgrammingHelper/blob/main/img/scientificCalculator.png" alt="Logo" width="1080" height="500">
</p>
