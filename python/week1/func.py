def userName(firstN,secondN,address):  
    return print(f"My name is {firstN} {secondN} and I live at {address}.")


userName(input("What is your first name? "),secondN = input("What is your surname? "),address = input("What is your Address? "))

#user

def addition():
    num1 = int(input("Enter first number: ")) # value inputted and stored in num1
    num2 = int(input("Enter second number: ")) # value inputted and stored in num2
    answer = num1 + num2 # num1 and num2 values added and answer stores the value
    return print(answer)  # return stops the function running and outputs to value held in answer

sum = addition() # 3 + 2 = 5

# Exercise: modify the subroutine below as a function.
# For an added challenge make the code as concise as possible
def userName4():  # define a subrouitine called userName
    fullName = input("Enter your name: ")
    address = input("Enter your address: ")
    interest = input("Any interest? ")
    print(f"my name is {fullName}, my address is {address} and my interest is {interest}")


#solution:
def username1(fullName, address, interest):
    return print(f"my name is {fullName}, my address is {address} and my interest is {interest}")
    # return makes this a function - subroutine does not have the return statement

username1(input("Enter your name: "), input("Enter your address: "),input("Any interest? "))