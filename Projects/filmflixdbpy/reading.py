from create import *


def read():
    dbcursor.execute("select * from tblfilms")
    records = dbcursor.fetchall()
    for aRecord in records:
        print(aRecord)
   
if __name__=="__main__":        
    read()