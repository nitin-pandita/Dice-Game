# Dice-Game

## Table of Contents
* [How to Install](#how-to-install)
* [How to Play](#how-to-play)
* [How to Contribute](#how-to-contribute)
* [Start Screen](#start-screen)
* [Gameplay](#gameplay)
* [About](#about)


## How to Install
* First step is to open a fresh CMD
* Next, navigate to a location in the CMD to save the code to
* After finding the location, go to the GitHub home page
* Search for the green “Code” button and click on it
* Copy the URL from the HTTPS section
* Return back to the CMD
* Type “git clone <URL>” where the URL is the previously copied one
* Now, cd into that newly cloned directory
* In the directory, type “npm i” to install the dependencies
* This will create a “nodes_module” folder in the overarching directory
* Wait for that to finish installing
* Type “npm run dev” to start it in dev mode
* When that finishes loading, control + left click on the local url that is displayed to open the localhost
* This will open up the game on its own page

## How to Play
* First step is to press the “Play Now” button on the start screen
* Now, you can choose a number 1-6 at the top to place your pick
* In order to actually roll the dice, you must click on the dice image in the middle of the screen
* If you are correct in your guess, the number you chose will be added to your total score
* If you are incorrect in your guess, you will lose 2 points from your total score
* Example:
  * If you select 5 and it lands on 5, you will gain 5 to your total score
  * If you select 5 again and it lands on 2, you will lose 2 from your total score (making the total score equal to 3)
* For a further explanation of the rules, you can click the “Show Rules” button when the game loads
* To reset the game and put your score at 0, you can click the “Reset” button

## How to Contribute
* Identify an issue or update that you would like to fix/add
* Create a new branch in the repo (choose a name that is fitting for your contribution)
* Add your code to this new branch with an explanation of the changes that were made
* Submit a PR and have someone test your changes to ensure it works in order to have it pushed to “Main”

## Start Screen
![image](https://github.com/nitin-pandita/Dice-Game/assets/91310284/66a180a3-7dea-4ab4-93c9-bc66cf7fff9f)

## Gameplay

![image](https://github.com/nitin-pandita/Dice-Game/assets/91310284/a0f09415-3d76-4af0-b7d5-8798d6e00cc0)

# About
This is a simple dice game built using ReactJS.
