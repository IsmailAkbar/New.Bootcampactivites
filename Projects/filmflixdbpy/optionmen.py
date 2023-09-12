import reading, adding, update, deletion, report
import time
user = input("Enter username: ")
print(f"\nHi {user}, Welcome to the FilmFlix database\n")

time.sleep(2)


def menuOp():
    options = 0
    menuNums = "Filmflix Menu Options\nEnter:\n1. Print.\n2. Add\n3. Update.\n4. Delete.\n5. Report.\n6. Exit."

    #print(menuNums)
    optionsList = ["1", "2", "3","4", "5", "6"]

    while options not in optionsList: # ["1", "2", "3","4", "5", "6"]# execute the inde code below
        print(menuNums)

        # re-assign the value of options
        options = input("Enter an option from the Filmflix main menu: ")

        if options not in optionsList:# ["1", "2", "3","4", "5", "6"]
            print(f"{options} is not a valid choice in the Filmflix menu!")
    return options
# menuOp()

mainProgram = True
menu2Nums = "Filmflix Report Options\nEnter:\n1. Genre.\n2. Title\n3. Year.\n4. Rating.\n5. Exit."
options2List = ["1", "2", "3","4", "5"]
while mainProgram: #Same as while True
    # call/invoke the menuOptions function and assign to a variable 
    mainMenu = menuOp()
    if mainMenu == "1": # go into the file and call/invoke the respective function
        reading.read()
    elif mainMenu =="2":
        adding.insertFilms()
    elif mainMenu =="3":
        update.update()
    elif mainMenu == "4":
        deletion.delete()
    elif mainMenu == "5":
        print(menu2Nums)
        optionsRep = input("Enter an option from the Filmflix Report menu: ")
        if optionsRep == "1":
            report.filmGenre()
        elif optionsRep == "2":
            report.filmTitle()
        elif optionsRep == "3":
            report.filmYear()
        elif optionsRep == "4":
            report.filmRating()
        elif optionsRep == "5":
            mainProgram = False   
        else:
            print(f"\nOption {optionsRep} is not a valid choice, please try again through the main menu and select the right options.\n")
            time.sleep(1)
    else:
        mainProgram = False
input("\nPress enter to quit the filmflix application")

# input("Press enter to quit the filmflix application")
        # report.filmGenre
        # report.filmTitle()
        # report.filmYear()
        # report.filmRating()
#     else:
#         # re-assign the mainProgram a false Boolean variable 
#         mainProgram = False
# input("Press enter to quit the filmflix application")