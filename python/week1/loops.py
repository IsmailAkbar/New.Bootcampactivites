for countdown in reversed(range(1,11)):
    print(countdown)


highscore = [125, 63, 35, 12]

for counter in range(len(highscore)): print(highscore[counter])

usersList = ["Anna", "Paul", "Joe", "Jane", "Anne", "Pauline", "Joan", "Janet"]

for users in usersList: print(f"{users}")




#Task:

#Using input from the user, Create a multiplication program that will times the users input up to 5 times the value.
#e.g. user inputs 3, your program calculates:

#1x3

#2x3

#3x3

#4x3

#5x3

#You will need a for loop and range for this to work.
print("Times table till 12")
userInput1 = int(input("Enter value: "))
for values in range(1,13): 
    print(values*userInput1)

#for values in range(5):


print("Welcome to the table quiz.\n")
num = int(input("Enter a number: "))


for i in range(1, 5): #1,2,3,4   
    answer = int(input(f" What is {i} x {num}? "))
    print(f"the answer is {answer} ")
    correct = i * num
    if answer == correct:
        print("Correct")

    else:
        print(f"No, the answer is  {correct}")


#whileloop

"""use a while loop when the number of iteration is unknown(dont know how many times you want/going 
to do something for)
A while loop also controls the flow of execution in a program"""


"""Comparison operator compare values
==    equal  ( 2 == 2)
< 	less than
> 	more than
<= 	less than or equal to 
>= 	greater than or equal to
!=    Not equal to"""

# While loop keeps looping/iterating until a condition is met
num = 1  # int(input("Enter number below 20: "))

while num <= 20:
    print(f"The number is {num}")
    num += 1  # what is this doing ? increments num by 1 every loop

"Exercise: Modify the code above to countdown from 20"

# "solution"
print("\ncountdown from 20")
num = 20
while num >= 0:
    print(f"The number is {num}")
    num -= 1  # what is this doing ? decrements num by 1 every loop

"""use a while loop when the number of iteration is unknown(dont know how many times you want/going 
to do something for)
A while loop also controls the flow of execution in a program"""


"""Comparison operator compare values
==    equal  ( 2 == 2)
< 	less than
> 	more than
<= 	less than or equal to 
>= 	greater than or equal to
!=    Not equal to"""
from random import randint  # import only the randint from the random library

# variable = method(start value and end value)
randNumbers = randint(1, 20)

# While loop keeps looping/iterating until a condition is met
num = 1  # int(input("Enter number below 20: "))

randNumbers
while num <= 20:
    print(f"The number is {num}")

    if num == randNumbers:  # set the condition to exit the loop
        print("exiting the loop...")

        break
    num += 1

     # what is this doing ? num = num + 1 so it is adding 1 to itself until 20

# the above while statement returns number + 1 untill randomNumbers is == to num then exits loop

a = 33
b = 200

if b > a:
  pass

#When the pass statement is executed, nothing happens, but you avoid getting an error when empty code is not allowed.
#Empty code is not allowed in loops, function definitions, class definitions, or in if statements.



# While loop keeps looping/iterating until a condition is met
"Run this loop and explain what it is doing "
userGuess = input("Enter guess word: ")  # first attempt at guessing the guess word
guessWord = "dfe1w3dev"
guessAttempts = 0  # flag variable = 1

# first attemmpt + two more attempts
while userGuess != guessWord and guessAttempts < 3:
    userGuess = input(f"Try again!: You have guessed {guessAttempts} / 3 attempts\n: ")
    guessAttempts += 1  # guessAttempts = guessAttempts + 1
    

if userGuess == guessWord:
    print(f"You guessed {userGuess} correctly")
else:
    print(f"You have guessed {guessAttempts} / 3 attempts")












