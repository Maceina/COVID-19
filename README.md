# COVID-19
COVID-19 statistics (cases and death) by country.

# Front end:
1. React.js
2. Material Ui
3. Charts.js
4. Axios
5. React Router

# Backend: 
1. Node.js
2. Express.js
3. Cors.js
4. Covid-19 data from opendata.ecdc.europa.eu

# How to build and run application:
1. Clone or download this repository
2. Open terminal and go to the server folder using terminal command "cd server"
3. Run command "npm install" to install dependencies
4. Run command "npm run start" to start the server or "npm run dev" to start in development mode on localhost:5000
5. Open a new terminal and navigate to client folder using "cd client" command
6. Run command "npm install" to install dependencies
7. Run command "npm start" to start react app on localhost:3000
# To do:
1. Create Rest api endpoint witch provides covid-19 cases and deaths by country. Country should be passed as a parameter.
2. Create Rest api endpoint witch provides all distinct countries.
3. Fetch all data of one country in react app.
4. Fetch all distinc country data in react app.
5. Display chart with cases and deaths of a country passed as url parameter.
6. Display all distinct countries in dropdown menu from distinct countries api endpoint.
7. After country is selected from dropdown the data in the chart should be refreshed.
8. Create a docker image.

# Done:
1. Create Rest api endpoint witch provides covid-19 cases and deaths by country. Country should be passed as a parameter. Api endpoint: localhost:5000/country.
2. Create Rest api endpoint witch provides all distinct countries. Api endpoint: localhost:5000/.
3. Fetch all data of one country in react app.
4. Fetch all distinc country data in react app.
# In Progress:
1. Display chart with cases and deaths of a country passed as url parameter.
2. Display all distinct countries in dropdown menu from distinct countries api endpoint.
3. After country is selected from dropdown the data in the chart should be refreshed.
4. Create a docker image.
