from connect import * # import the connect.py module 
dbcursor.execute(""" 
CREATE TABLE "members" (
	"MemberID"	INTEGER NOT NULL UNIQUE,
	"Firstname"	TEXT,
	"Lastname"	TEXT,
	"Email"	TEXT,
	PRIMARY KEY("MemberID" AUTOINCREMENT)
)""")

# ...............................
dbcursor.execute("""
CREATE TABLE "songs" (
	"SongID"	INTEGER NOT NULL UNIQUE,
	"Title"	TEXT,
	"Artist"	TEXT,
	"Genre"	TEXT,
	PRIMARY KEY("SongID" AUTOINCREMENT)
)""")
# ......... Create the table(s) with the foreigh keys last..................
dbcursor.execute("""
  CREATE TABLE "downloads" (
	"DownlID"	INTEGER NOT NULL UNIQUE,
	"SongID"	INTEGER,
	"MemberID"	INTEGER,
	"Date"	TEXT,
	PRIMARY KEY("DownlID" AUTOINCREMENT),
	FOREIGN KEY("SongID") REFERENCES "songs"("SongID"),
	FOREIGN KEY("MemberID") REFERENCES "members"("MemberID")
)""")
