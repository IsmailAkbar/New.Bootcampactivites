from random import randint  # import only the randint from the random library

# variable = method(start value and end value)
randNumbers = randint(1, 20)
print(f"The random generated number is: {randNumbers}")


from random import randint

dice1 = 6  # randint(1, 6)
dice2 = 6  # randint(1, 6)


print(f"Dice 1: {dice1} | Dice 2: {dice2}")

dice = dice1 + dice2  # adding the values of both dice

if dice == 12:  # check if the total of both dice is 12
    dice = dice * 2  # double the total from both dice
    print(f"You threw {dice}")
else:
    if dice1 == dice2:
        dice = dice  # 10 = 10
        print(f"You threw {dice}")
# diceThrow = dice
# print(f"You threw a total {diceThrow}")
print(f"You threw a total {dice}")


# a message that you threw a double if both number on the two dice are a match
# multiply the total value of both dice by 2 if the total is 12

import time  # import the time library/class/module

name = "Jane"
print(name)

# invoke/call the time function and pass in seconds as argument
time.sleep(5)
print(f"Printed after 5 seconds: {name}")

import math  # import the math library/class/module

radius = float(input("Enter radius: "))
area = math.pi * radius ** 2

print(f"The area is {area}")

# method 1
print(f"The area displayed is rounded to 2 decimal places {area:.2f}")
# exercise: modify the code above to round to 3 decimal places


# method 2
"Complete the code block below to use the floor method to round down nearest whole number"
roundDown = math
print(f"The area is rounded down to the nearest whole number: {roundDown}")


# method 3
"Complete the code block below to use the ceil method to round up to nearest whole number"
roundUp = math.ceil(area)
print(f"The area is rounded up to the nearest whole number: {roundUp}")

# method 4
"Complete the code block below to use the round method to round up to two decimal places"
print(f"Using the round method:{(area, 2)}")

#PEDMAS do research