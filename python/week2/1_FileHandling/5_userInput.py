fname    = input("Enter you full name: ")
address   = input("Enter your address: ")
interest = input("Enter your interest: ")
age      =    int(input("Enter your age: "))

"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called userDetails.txt"

with open('python/week2/1_FileHandling/userDetails.txt',"a") as userData:

    userInfo = f"\n{fname} {address} {interest} {age}"
    userData.write(userInfo)
"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp


dataList = []
dataList.append(fname)
dataList.append(address)
dataList.append(interest)
dataList.append(age)
userData.write(f"\n{dataList}")

