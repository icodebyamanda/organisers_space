# organisers_space

Database prep

npm install sequelize mysql2

Create a local MySQL database.
Add a .env to your root folder containing the MySQL authentication information for the root user as well as the name of your database. For example:

DB_HOST=localhost
DB_USER=root
DB_PASS=YOURPASSWORD
DB_NAME=YOURDATABASE
SUPER_SECRET=shhhhhhh

Run npm run migrate in your terminal in order to create the DB tables.

npm install jsonwebtoken bcrypt
npm install axios

- Chose not to delete all keywords in spite of an event or a profile being deleted
