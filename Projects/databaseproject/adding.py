from create import *

import time
films = []
def insertFilms():

    title =input("Enter film Title: ")

    yearrealeased =input("Enter film release date: ")

    rating = input("Enter film rating: ")

    duration = input("Enter film duration (to nearest hour): ")

    genre = input("Enter film genre: ")

    films.append(title)
    films.append(yearrealeased)
    films.append(rating)
    films.append(duration)
    films.append(genre)

    dbcursor.execute("INSERT INTO tblfilms(title,yearReleased,rating,duration,genre)VALUES (?,?,?,?,?)", films)
    dbcon.commit()

    print(f"{title} inserted into films table")

if __name__=="__main__":

    insertFilms()

