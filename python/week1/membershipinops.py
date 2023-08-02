searchStr = "Python is a great programming language"
findChar = input("Enter character to search for: ")

"""The membership operator can be used to check if a value/substring is present 
or not in object and returns true if it does"""
if findChar not in searchStr :  # opposite of the in operator is the 'not in'
    print(f"Found {findChar}")
else:
    print(f" Not Found")

    #The above is doing - if letter is in searchstr and is written in input it will say not found because of not in operator

"Exercise: replace the in operator with the 'not in' operator " #done above 

"Exercise:"

# You have been provided with the vowels in a list data structure and a variable
vowels = ["a","e","i","o","u"]
# name that is assigned with an empty string.
name = "ismail akbar"
"""

"Your task is to assign your name to the variable called name and use a for loop and

if statement to:"

"Iterate through the list of vowels to find the vowels in your name"

"""
if (char in vowels for char in name.lower()): 
    #does the character from the vowels list also exsist in the name?
    print("Your name contains vowels")
else:
    print("Your name does not contain vowels")

name = input("Enter your name: ")




vowels_in_name = []




for char in name:

    if char.lower() in vowels:

        vowels_in_name.append(char.lower())




print(f"Vowels in your name: {vowels_in_name}")