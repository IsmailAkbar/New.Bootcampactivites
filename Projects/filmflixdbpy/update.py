from create import *


def update():

    idField = input("Enter Film ID: ")

    fieldName = input("Enter any of the following - Title, year released, rating, duration or genre as field name: ").title()
    
    fieldValue = input(f"Enter the value for {fieldName} field: ")
    
    fieldValue = "'" +fieldValue+ "'"


    dbcursor.execute(f"UPDATE tblfilms SET {fieldName} = {fieldValue} Where filmID = {idField}")
    dbcon.commit()


    print(f"record {idField} updated in filmflix table")


if __name__=="__main__":
    update()
