from connect import *

import readsongs

import time

 

#subroutine/function

def insertSongs():

    songs = [(  'Hold on', 'Megaheart', 'Blues'),

            (  'Keep on dreaming', 'Heart Fighters', 'Rock'),

            (  'Sandy shores', 'Tiny Tiny', 'Rock and Roll'),

            (  'My heart is in Dublin', 'Monica Wonder', 'Rock'),

            (  'I lost my mind tonight', 'Hairy February', 'Country'),]

 

    # insert data stored in the ist into the songs table in the database

    dbcursor.executemany("INSERT INTO songs(Title,Artist,Genre) VALUES (?,?,?)", songs)

    dbcon.commit()# save the data permanently in the table

 

    print(f"{songs[0]} insertd into songs table")

    time.sleep(3)

     # call readSongs.read()

    readsongs.read()

       

if __name__=="__main__":

    insertSongs()

    dbcon.close() # closes the connnection