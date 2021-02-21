# COVID-19
COVID-19 statistics (cases and death) by country.


# How to build and run application:
1. Clone or download this repository
2. Open terminal and go to the server folder using terminal command "cd server"
3. Run command "npm install" to install dependencies
4. Run command "npm run start" to start the server or "npm run dev" to start in development mode on localhost:5000
5. Open a new terminal and navigate to client folder using "cd client" command
6. Run command "npm install" to install dependencies
7. Run command "npm start" to start react app on localhost:3000
8. Open http://localhost:3000 in your browser.


# Front end:
1. React.js
2. React-Bootsrap
3. Charts.js
4. Axios

# Backend: 
1. Node.js
2. Express.js
3. Cors.js
4. Covid-19 data from opendata.ecdc.europa.eu
5. Axios

# Tasks:
1. The application backend should read the data from this endpoint https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/
2. Data should be read from external source only once when application is starting.
3. The  COVID-19. data should be kept in memory. 
4. Create rest api endpoint which provides covid-19 case and death data by country. The country should be passed as a parameter to the rest api.
5. The web application should display the chart with two lines (cases and deaths) by week.
6. In web application it should be possible to select the country from the dropdown list.
7. After the country is selected the data in the chart should be refreshed.

