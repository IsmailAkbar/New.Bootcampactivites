from connect import *

import time
songs = []
def insertSongs():

    title =input("Enter Song Title: ")

    artist =input("Enter Song Artist: ")

    genre = input("Enter Song Genre: ")

    songs.append(title)
    songs.append(artist)
    songs.append(genre)

    dbcursor.execute("INSERT INTO Songs(title,artist,genre)VALUES (?,?,?)", songs)
    dbcon.commit()

    print(f"{title} insertd into songs table")

if __name__=="__main__":

    insertSongs()




