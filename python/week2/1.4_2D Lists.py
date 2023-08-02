"objective"
"Create multidimentional list" '' # 2D lists
"" '' # Define a 2D list
"" '' # Use a 2D list in a program
"" '' # Access items from a 2D list

# A list is used to hold multiple elements under one name. 
# A two-dimensional list allows you to hold a list as one element. 
# Data in a 2D list can be held in rows and columns. 

bootcamp = [
    
# 0           1          2           3       4         5      6
["Abdul", "Christian", "Narayan", "Richie", "Tim", "Waqas", "Zak"], #0

["SDLC", "HTML", "CSS", "JavaScript", "Database", "Python", "Project Week"],#1
["Week1","Week2","Week3","Week4","Week5","Week6","Week7"]#2
]

"To Do: Task 5: Predict, run, investigate and add comment to explain all the print statements below"
print(bootcamp)
print(bootcamp[0])
print(bootcamp[1])
print(bootcamp[0][1])
print(bootcamp[0][1:4])
print(bootcamp[0][0], bootcamp[1][0], bootcamp[2][3])

bootcamp[0][0] = "A test"

print(bootcamp[0])




bootcamp[0][2] = "My name"

print(bootcamp[0])




yourList = ["X","Y","Z","G"]




myList = ["S","A","M","E"]

# bootcamp.extend([myList, yourList])

bootcamp.extend([["1","2","3","4"], ["5","6","7","8"],myList, yourList])

print(bootcamp)