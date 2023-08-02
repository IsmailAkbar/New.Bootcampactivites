from create import *

# def artist():
#     artistField = input("Enter the name of the the artist to search for: ")
#     dbCursor.execute(f"SELECT * FROM songs WHERE Artist = '{artistField}' ")#select all records
#     records = dbCursor.fetchall() # fetches the select records
#     for aRecord in records:
#         print(aRecord)
# artist()


# def idField():
#     songIDField = input("Enter SongID of the song to search for: ")
#     dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songIDField} ")#select all records
#     records = dbCursor.fetchall() # fetches the select records
#     for aRecord in records:
#         print(aRecord)
# idField()

def filmTitle():
    # dbCursor.execute("SELECT * FROM songs ORDER BY SongID DESC")
    # dbCursor.execute("SELECT * FROM songs WHERE Genre = 'Pop' ")
    # dbCursor.execute("SELECT Artist, Genre FROM songs  ORDER BY SongID")
    # dbCursor.execute("SELECT * FROM songs WHERE Title Like 'a%' ")
    # dbCursor.execute("SELECT * FROM songs WHERE Title NOT Like 'a%' ")
    titleSearch = input("Enter the title of the film to search for: ").title()
    dbcursor.execute(f"SELECT * FROM tblfilms WHERE title = '{titleSearch}' ")
    records = dbcursor.fetchall() # fetches the select records
    for aRecord in records:
        print(aRecord)
if __name__=="__main__":  
    filmTitle()

def filmGenre():
    genreSearch = input("Enter the genre of the film to search for: ").lower()
    dbcursor.execute(f"SELECT * FROM tblfilms WHERE genre = '{genreSearch}' ")
    records = dbcursor.fetchall() # fetches the select records
    for aRecord in records:
        print(aRecord)
if __name__=="__main__":  
    filmGenre()

def filmYear():
    yearSearch = int(input("Enter the year of the film to search for: "))
    dbcursor.execute(f"SELECT * FROM tblfilms WHERE yearReleased = '{yearSearch}' ")
    records = dbcursor.fetchall() # fetches the select records
    for aRecord in records:
        print(aRecord)
if __name__=="__main__":  
    filmYear()

def filmRating():
    ratingSearch = (input("Enter the year of the film to search for: "))
    dbcursor.execute(f"SELECT * FROM tblfilms WHERE rating >= '{ratingSearch}' ")
    records = dbcursor.fetchall() # fetches the select records
    for aRecord in records:
        print(aRecord)
if __name__=="__main__":  
    filmRating()


















