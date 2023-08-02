from connect import *

import readsongs
import time



def bulkInsert():
    # load and read(songs.sql) from file
    with open(r"python\week2\pt9_db10\songs.sql") as sqlFile:
        #read content in alias
        dumpData = sqlFile.read()
        dbcursor.executescript(dumpData) #dumpdata as argument
        dbcon.commit()

        time.sleep(3)

        readsongs.read()

if __name__=="__main__":
    bulkInsert()









