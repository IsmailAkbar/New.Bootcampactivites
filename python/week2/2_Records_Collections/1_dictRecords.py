"Read data structures and record for 2 minutes"
"""
Data structures are used to store data in an organised and accessible way. 
A list is a data structure.  Another example of a data structure is a record.  
You might have heard of the word record if you have ever created a database before. 


A record allows you to store a collection of attributes for a single entity.
Data structure: record: An entity can be any object, place, person, or thing. 
Attributes are properties or characteristics of that entity.  
Attributes are sometimes referred to as fields. 

"""


"To Do: Predict, then Run, and then Investigate"
# create a dictionary 
dict1 = {"fullname": "Jane Smith", "Age" : "23", "Hobby" : "gaming"}
print(dict1)
print(dict1["fullname"])
print(dict1["Age"])
"Using dictionary methods"

dict1.items() #-> a set-like object providing a view on D's items
dItems1 = dict1.items()
print(dict1)
dict1.keys() #-> a set-like object providing a view on D's keys
dKeys1 = dict1.keys()
print(f"Dictionary 1 Keys\n {dKeys1}\n")
dict1.values() #-> an object providing a view on D's values
dVals1 = dict1.values()
print(f"Dictionary 1 Values\n {dVals1}\n")

"To Do: Task 1: Refer to the example code above to create your own dictionary with key value pairs and explain the differences between the items(), keys() and values() dictionary methods"

# Loop through the keys ansd/values

# Loop through the keys ansd/values

for aKey in dKeys1:

    print(aKey)




for aVal in dVals1:

    print(aVal)

for aKey, theV in dict1.items():
    print(f"Key| {aKey} , Value | {aVal}")
"To Do: Task 2: Modify"
# Modify: The for loop block above to loop through your own the values 

"To Do: Extension: Can you use the for loop with the items method to loop through the keys and values simultaneously"
# Modify: The for loop block above to loop through the keys and the values and format your output

# create a dictionary 
dict2 = {2:"Python", 3:"HTML", 4:"CSS"}
print(f"Dictionary 2 {dict2}")


# Use of the Update method to merge two dictionaries
dict1.update(dict2)
#print(f"Updated dictionary 1\n{dict1}")

"To Do: Task 2: Research: Look up Pop vs popItem explaind comment the code below to explain the difference"

# Add comment here to explain the function of th pop() method.
dict2.pop(3)
print(dict2)

# Add comment here to explain the function of th popItem() method.
#?.popitem()
print(dict1)


"Delete key-value pair from dictionary:"
# We can delete a key-value pair from a dictionary using the del keyword followed
# by the key value to be deleted enclosed in [].

del dict1[2]


# update dictionary value using the key
dict1[1] = "Emma Smith"
user={"interests" :"coding"}

print(user)
user["interests"] = "Football"

print(dict1)
print(user)