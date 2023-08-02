#Validation
try:  # the code to try and execute
    num1 = input("Enter first number: ")
    num2 = input("Enter second number: ")
    answer = int(num1) + int(num2)
    print(answer)
except ValueError:  # handle the error
    print("Please enter a numeric value")

print("Some process to execute")
print("Some process to execute")
print("Some process to execute")
print("Some process to execute")
print("Some process to execute")


#validation pt 2
name = input("Enter name: ")

# Return True if the string is a lowercase string, False otherwise.
if name.islower():
    print(f"Welcome {name}")
else:
    print(f"Your name {name} is not in lower case")
    exit()  # exit





"""

Subroutine is a Sequence of instructions/code block to perform a specific task with an

identifiable name.  A subroutine does not have a return statement

def keyword is used to define a subroutine, followed by the name of the subroutine

A subroutine is not executed unless it is invoked/called




"""


def userName():
        name = input("Enter your USERNAME: ")
        print(f"The Username you have chosen is {name}")

userName()

def addition():
        number1 = int(input("Enter your first number: "))
        number2 = int(input("Enter your second number: "))
        ans = number1 + number2
        print(f"The answer to {number1} plus {number2} is {ans}")

addition()

def subtraction():
        number1 = int(input("Enter your first number: "))
        number2 = int(input("Enter your second number: "))
        ans = number1 - number2
        print(f"The answer to {number1} minus {number2} is {ans}")

subtraction()

def multiply():
        number1 = int(input("Enter your first number: "))
        number2 = int(input("Enter your second number: "))
        ans = number1 * number2
        print(f"The answer to {number1} times {number2} is {ans}")

multiply()

def division():
        number1 = int(input("Enter your first number: "))
        number2 = int(input("Enter your second number: "))
        ans = round(number1 / number2)
        print(f"The answer to {number1} divided by {number2} is {ans}")

division()

def parameterMethod(fName):
      print(f"Name entered is: {fName}")

parameterMethod("bob") #1

parameterMethod(input("What is your name? ")) #2

argFName = input("What is your name? ")

parameterMethod(argFName)    #3


def userName(firstN,secondN,interest):  
    print(f"Your first name is - {firstN}\nYour last name is - {secondN}\nYour interests include - {interest}")

userName(input("What is your first name? "),input("What is your surname? "),input("What are your interests? "))











