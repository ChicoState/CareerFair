# Step One: install all dependencies for Project
## Do this in the root directory 
npm install express body-parser ejs mongojs --save

# Step Two: In the root directory run following command: 
## This allows for you to make changes while the server is running
nodemon 

# Step Three: In the client directory run following commands consecutively: 
npm install
## if something fails after this command is ran either try sudo prior to it, or there is a dependency you havent installed yet
npm start
## if this fails something in typescript or javascript isnt working, consult this information with the group 

## For any other information that isnt making clear sense let the group know so we can make additions to this file 

#When wanting to run the app, go to /CareerFair/career-fair-app/ and do npm start. after that, go to /CareerFair/career-fair-app/client/ and do npm start

#I dont think the order of CTRL C'ing things matters but I CTRL C /CareerFair/career-fair-app/client first, then /CareerFair/career-fair-app
