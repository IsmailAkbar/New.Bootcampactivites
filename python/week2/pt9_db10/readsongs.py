from connect import *

def read():
    dbcursor.execute("select * from songs")
    records = dbcursor.fetchall()
    for aRecord in records:
        print(aRecord)
   
if __name__=="__main__":        
    read()
