from connect import *


def delete():
    idField = input("Enter Song ID: ")


    dbcursor.execute(f"DELETE FROM songs WHERE SongID = {idField}")
    dbcon.commit()








    print(f"record {idField} deleted from songs")

if __name__=="__main__":
    delete()