import readsongs, addsongs, updatesongs, deletesql
import time

def menuOp():
    options = 0
    menuNums = "Songs Menu Options\nEnter:\n1. Print.\n2. Add\n3. Update.\n4. Delete.\n5. Exit."

    print(menuNums)
    optionsList = ["1", "2", "3","4", "5"]

    while options not in optionsList: # ["1", "2", "3","4", "5"]# execute the inde code below
        print(menuNums)

        # re-assign the value of options
        options = input("Enter an option from the songs main main!")

        if options not in optionsList:# ["1", "2", "3","4", "5"]
            print(f"{options} is not a vali choice in the songs menu!")
    return options
# menuOp()


mainProgram = True

while mainProgram: #Same as while True
    # call/invoke the menuOptions function and assign to a variable 
    mainMenu = menuOp()
    if mainMenu == "1": # go into the file and call/invoke the respective function
        readsongs.read()
    elif mainMenu =="2":
        addsongs.insertSongs()
    elif mainMenu =="3":
        updatesongs.update()
    elif mainMenu == "4":
        deletesql.delete()
    else:
        # re-assign the mainProgram a false Boolean variable 
        mainProgram = False
input("Press enter to quit the songs application")