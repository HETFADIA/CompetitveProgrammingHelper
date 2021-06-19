<p>Click below to use Competitive Programming Helper</p>
https://hetfadia.github.io/CompetitveProgrammingHelper/

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#About">About</a></li>
    <li><a href="#howtorun">Instructions on How to Run</a></li>
    <li><a href="#input">Input features</a></li>
    <li><a href="#Monte-Carlo-Simulation">Monte Carlo Simulation</a></li>
    <li><a href="#How-to-Select-and-Unselect-a-cell">How to Select and Unselect a cell</a></li>
    <li><a href="#Details-about-the-page">Details about the page</a></li>
    <li><a href="#Randomly-Select-Button">Simulation</a></li>
    <li><a href="#Data-Structures-Used">Data Structures Used</a></li>
    <li><a href="#Implementation">Implementation</a></li>
    <li><a href="#timecomplexity">Time Complexity</a></li>
    <li><a href="#ScreenShots">ScreenShots</a></li>
    <li><a href="#sources">Sources</a></li>
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
<p>Click on Generate button to generate the output(arrays or permutations or prime factors).</p>
<p>Click on clear button to reset the generated output.</p>

<p id="input"></p>

## Input Features

The program automatically evaluates the input.

- `10` Evaluated as 10
- `1e7` Evaluated as 10000000
- `2*10*3/2` Evaluated as its value ie. 30
- `pow(10,5)` Evaluated as 100000
- `sqrt(100)` Evaluated as 10
- `cbrt(1000)` Evaluated as 10
- `log(1000)` Evaluated as Math.log(1000)=6.9
- `log2(1000)` Evaluated as Math.log2(1000)=9.96
- `log10(1000)` Evaluated as Math.log10(1000)=3
- `exp(3)` Evaluated as e raised to 3= 20.08
- `pi` Evaluated as pi(pi, Pi, PI, pI all works here)
- `e` Evaluated as e ie 2.73
- `pi*e` Evaluated as pi into e
- `sin(1)` Evaluated as sin of 1 radian
- `cos(1)` Evaluated as cos of 1 radian
- `tan(1)` Evaluated as tan of 1 radian
<p>
  Many other expressions are also evaluated by writing Math.atan, Math.acos etc.
</p>
<p>
  Thus any integer expression in any of the input boxes can be replaced by 1e7, log2(3) and the program will work fine.
</p>

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
</p>
<p>
For using string and characters in sort, you have to input manually like 'a' 'abc' 'str' 't'
</p>
