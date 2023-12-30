# Password Strength Checker

A dynamic web application that compares the length of time it would take for different machines to brute force your password. 

### Table of Contents
1. [Introduction](#Introduction) <a name="Introduction"/>
2. [Features](#Features) <a name="Features"/>
3. [Technology Stack](#TechnologyStack) <a name="TechnologyStack"/>
4. [Getting Started](#GettingStarted) <a name="GettingStarted"/>
5. [Usage](#Usage) <a name="Usage"/>
6. [Feedback](#Feedback) <a name="Feedback"/>
7. [Progress](#Progress) <a name="Progress"/>

### Introduction 


This web application serves as an educational tool for understanding the impact of computational power on password security. It provides real-time estimates on the time required for different types of computing machines to brute-force a given password, shedding light on the evolving challenges of cybersecurity.

### Features
- Real-time Password Strength Assessment: Instantly evaluate the strength of a password as you type.
- Multi-machine Comparison: Includes a range of computing machines for comparison, such as Atari 2600, a typical modern computer, a supercomputer, and a speculative quantum computer.

Brute forcing depends on many factors such as the hashing algorithm used, the attacker's knowledge, computing power, etc. 

The algorithm uses a guesses-per-second method to measure brute force for now. I might implement a more sophisticated algorithm in the future to more accurately calculate brute force timing. The point of the web app is not necessarily to get an exact precise time for brute forcing, but to give a feel for how differences in computing power can impact brute force crack time.

The ‘guesses per second’ need to take into account the specifications of the machine used. While getting an exact number of them is difficult, I have used reasonable estimates from the research I have done on the machines. 

These are the guesses per second, for now, they might change in the future if I encounter new knowledge.

Atari 2600: 0.1 guesses per second.

Explanation: 

The Atari 2600 uses the MOS 6507 microprocessor, which is a variant of the 6502 used in the Atari 800. It is estimated that it runs at approximately 1.19 Mhz. It is extremely slow compared to modern computers. 

Modern Computer: 1 billion guesses per second

Explanation: A modern computer can vary in its computational power depending on its hardware. I estimated 1 billion guesses per second. Of course, there is a range but this estimate is suited for the app. It is much faster than an Atari. 

Supercomputer: 1 Trillion guesses per second

Explanation: Supercomputers are incredibly powerful and capable of extremely heavy computation. They are usually thousands of times faster than the everyday computers that we interact with. I estimated 1 trillion guesses per second. The exact will differ depending on the configuration of the machine. 

Quantum Computer: 1 Quadrillion guesses per second.

Explanation: Quantum computers are still in their early stages. There is the potential for quantum computers to be able to brute force passwords. When it comes to quantum computers, things start to change a little more than we have seen previously with the other machines. They are not necessarily ‘faster’ in every way, they also work differently. The application of quantum computers is still a topic of research. However, there are theories that quantum computers could be much faster than supercomputers. Some even speculate that they will break security as a whole. I used a quadrillion guesses per second. This is not a scientific number as this technology is still in its experimental stage. However, some problems can be solved much faster with a quantum computer. Perhaps, this is also the case with brute forcing passwords. 

Disclaimer: The 'guesses per second' figures used in this application are approximations and should be used for illustrative purposes only. They are based on a mix of general knowledge and estimation to provide a basic understanding of how different types of computing machines may vary in their ability to crack passwords via brute force. These numbers are not derived from empirical data or rigorous research. Future versions of this application aim to improve the accuracy of these estimations.


### Technology Stack

This web app was built using HTML, CSS, and Vanilla Javascript. 


### Getting Started

For installation, simply clone or download the repository. There is also the option to run this web app online through my website (can be found on my profile). After downloading, simply double-click ‘index.html’ and you’re good to go!


### Usage

To start, type in a password you would like to test. (Note: **The website does not store any passwords. That functionality will not be added for privacy purposes**). Experiment with how different passwords impact brute force timing. The input box will turn green when a password of a sufficient length is entered. You can also click on each machine to learn more about them.

### Feedback

I am always looking to improve. If you have any constructive criticism or feedback for this project, then I would love to hear it! Feel free to open an issue or contact me directly through my website or Github.

### Progress

There are a few features I would like to add to this app in the future. Green means it has been added, red means it has yet to be added. Some of these features include:
```diff
+ The password search bar turns different colors reflecting the general strength of the password 
+ A welcome page, giving information about the importance of a strong password, welcoming the user, and explaining the purpose behind the app. 
+ The ability to click on any of the machines and learn about their history.
- Make the website responsive



