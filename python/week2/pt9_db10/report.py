from connect import *

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

def recordsOrder():
    # dbCursor.execute("SELECT * FROM songs ORDER BY SongID DESC")
    # dbCursor.execute("SELECT * FROM songs WHERE Genre = 'Pop' ")
    # dbCursor.execute("SELECT Artist, Genre FROM songs  ORDER BY SongID")
    # dbCursor.execute("SELECT * FROM songs WHERE Title Like 'a%' ")
    # dbCursor.execute("SELECT * FROM songs WHERE Title NOT Like 'a%' ")
    dbcursor.execute("SELECT * FROM songs WHERE Genre = 'Pop' or Genre = 'Dance' ")
    records = dbcursor.fetchall() # fetches the select records
    for aRecord in records:
        print(aRecord)
recordsOrder()

















