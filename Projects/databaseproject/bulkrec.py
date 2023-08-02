from create import *

import reading
import time



def bulkInsert():
    # load and read(songs.sql) from file
    with open(r"Projects\databaseproject\datatotrans.sql") as sqlFile:
        #read content in alias
        transData = sqlFile.read()
        dbcursor.executescript(transData) #dumpdata as argument
        dbcon.commit()

        time.sleep(3)

        reading.read()

if __name__=="__main__":
    bulkInsert()