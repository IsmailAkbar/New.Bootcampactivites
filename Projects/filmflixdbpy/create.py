import sqlite3
dbcon = sqlite3.connect(r"Projects\databaseproject\filmflix.db") # create db file or open existing

dbcursor = dbcon.cursor()