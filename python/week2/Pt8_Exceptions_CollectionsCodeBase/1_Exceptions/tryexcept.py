

# num1 = int(input("Enter first number: "))

# num2 = int(input("Enter second number: "))




# total = num1 + num2




# print(f"The total of {num1} +  {num2} : {total}")
#valueError
try:

    num1 = int(input("Enter first number: "))

    num2 = int(input("Enter second number: "))




    total = num1 + num2




    print(f"The total of {num1} +  {num2} : {total}")

except ValueError: #execute if there is a specific error 

    print("Only intergers values allowed")

except TypeError:

    print("You can't add an integer values with a string value")









