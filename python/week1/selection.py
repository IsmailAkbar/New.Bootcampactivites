score = 26
greatScore = 24

if score > greatScore:
    print(f"you scored higher than {greatScore} and have a score of {score}, well done!")
else: 
    print("your score is okay")


#Create a program that find the minimum value between two numbers using if else
a=int(input("enter first number"))

b=int(input("enter second number"))


if a>b:

    print (f"{b} is minimum value")



else:

    print (f"{a} is minimum value")



cardvalue = "King"
suitOfcards = "Hearts"

chkCardValue = input("Enter card value: ").title()
chkCardSuit = input("Enter card suit: ").title()

# use the and operator
if cardvalue == chkCardValue and suitOfcards == chkCardSuit:
    #King        King                  Hearts        Hearts
    print("Winner!")
else:
    print("Try Again")

#use or & not


cardvalue = "King"
suitOfcards = "Hearts"

chkCardValue = input("Enter card value: ").title()
chkCardSuit = input("Enter card suit: ").title()

# use the and operator
if cardvalue == chkCardValue and not suitOfcards == chkCardSuit:
    #King        King                  Hearts        Hearts
    print("you got 1 right try again!")

elif cardvalue == chkCardValue and suitOfcards == chkCardSuit:
    print("winner")

elif cardvalue == chkCardSuit or suitOfcards == chkCardValue:
    print("Quick hint - YOU HAVE IT SWITCHED!")

else:
    print("Try Again")


# Exercise: Using if Elif and else

# Create a Menu program that allows user to select between three subject choices

# User must be presented with the value assoiciated with each choice

# for example 1. Music, 2. Maths ....

# A choice must also be available for the user to exit the program

# A message using the print function must be display as per the user choice
print(f"Choose a subject")
selectSub = ["Maths", "English", "Science", "Exit"]
select = input("Choose subject: ")

print(f"Choose an option from {select[0]}, {select[1]}, {select[2]} or {select[3]} from menu.")

if select == selectSub[0]:
  
    print(f"You have chosen {selectSub[0]}")

elif select == selectSub[1]:
    print(f"You have chosen {selectSub[1]}")

elif select == selectSub[2]:
    print(f"You have chosen {selectSub[2]}")

elif select == selectSub[3]:
    print(f"You have chosen to {selectSub[3]}")

else:
    print("You have not chosen any available subjects")

#nesting
userAge = int(input("Enter your age: "))
ageLimit = 16
passCode = "dfe1w3dev"
# Exercise: Modify the code above to use else for both if condition
if ( 
    userAge > ageLimit):  
    print("You met the minimum age requirement") # compare the value held in userAge against the value held in ageLimit
 # execute if the condition above is met

    userCode = input("Enter code: ")  # "dfe1w3dev"

    if  userCode == passCode:  # this block is nested inside the first if
        print(f"Your code {userCode} is valid. Access granted !")
    else:
        print(f"Your code {userCode} is invalid. Access Denied !")

else: 
    print(f"You are {userAge} years old and below the age limit!")