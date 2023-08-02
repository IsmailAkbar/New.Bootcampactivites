# Logical expression evaluates True or False
"Logical Operators: and, or,  not"

"""Comparison operator compare values
==    equal  ( 2 == 2)
< 	less than
> 	more than
<= 	less than or equal to 
>= 	greater than or equal to
!=    Not equal to"""

num1 = 10  # int(input("Enter a number: "))
num2 = 5
num3 = 11
num4 = 2


print(num1 == num2)
print(num1 == 10)
print(num2 == 5)



# Exercise: use the logical operator with the comaprison operator to evaluate the expresssions

# Logical Operators: and
print("Logical Operators: and")
print(num1 != 10 and num1 < 10)
"use num1 and num2 variables"
print(num1 == 10 and num2 == 5)
# When num1 = 10, num2 = 50
# When num1 = 15, num2 = 5

# Logical Operators: or
print("Logical Operators: or")
print(num1 != 10 or num1 < 10)
# When num1 = 10, num2 = 5
# When num1 = 10, num2 = 50
# When num1 = 15, num2 = 5


# Logical Operators: not
print("Logical Operators: not")
# Example:
print(not (num1 != 10))
# not() will reverse the criteria inside its parentheses


print("Logical Operators: not with and")
"num1 = 10"
print(not (num1 == 10 and num2 == 5))  # num1 is not equal to 10 and num2 is not equal to 5
# When num1 is not = 10, num2 is not = 5
# When num1 is not = 10, num2 is not = 50
# When num1 is not = 15, num2 is not = 5
# When num1 is not = 1, num2 is not = 50

# Arithmetic expression evaluates to a number

num1 = 10  # int(input("Enter a number: "))
num2 = 5
num3 = 11
num4 = 2


# Exercise: use the arithmetic operators below

# plus operator +
"use num1 and num2 variables"
print(f"Addition:{num1} + {num2} = {num1 + num2}")

# division /
"use num3 and num4 variables"
print(f"Division (/): {num3} / {num4} = {num3 / num4}")

# Floor division //
"use num3 and num4 variables"
print(f"Floor division (//):{num3} // {num4} = {num3 // num4}")

# Modulus %
"use num3 and num4 variables"
print(f"Modulus (%): {num3} % {num4} = {num3 % num4}")
