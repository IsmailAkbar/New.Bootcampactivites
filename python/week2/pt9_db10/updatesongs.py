from connect import *


def update():

    idField = input("Enter Song ID: ")

    fieldName = input("Enter Title or Genre or Artist as field name: ").title()
    
    fieldValue = input(f"Enter the value for {fieldName} field: ")
    
    fieldValue = "'" +fieldValue+ "'"


    dbcursor.execute(f"UPDATE songs SET {fieldName} = {fieldValue} Where SongID = {idField}")
    dbcon.commit()


    print(f"record {idField} updated in songs table")


if __name__=="__main__":
    update()












