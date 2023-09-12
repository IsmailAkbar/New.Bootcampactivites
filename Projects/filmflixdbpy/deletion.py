from create import *


def delete():
    idField = input("Enter Film ID: ")


    dbcursor.execute(f"DELETE FROM tblfilms WHERE filmID = {idField}")
    dbcon.commit()








    print(f"film record {idField} has been deleted from filmflix")

if __name__=="__main__":
    delete()