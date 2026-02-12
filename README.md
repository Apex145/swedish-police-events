# Sweden Police Events Tracker
This is a very simple application using a fetch to get the api and using Leaflet to display a map of the 40 newest events/crimes that the swedish police has uploaded. It will show up to 40 markers at once. 
Keep in mind that not all events have markers so it may be less the 40.

# Features
- **Live Data Fetching:** Automatically retrieves the 40 most recent police reports.
- **Interactive Map:** Utilizes Leaflet.js for high-performance mapping and navigation.
- **Detailed Popups:** Click on any marker to see:
  * Incident type (e.g., Theft, Traffic accident).
  * Location and timestamp.
  * A brief summary of the event.
  * A direct link to the full report on the official Police website.
 
# Tech Stack
- **Frontend:** HTML5, CSS3 (Custom responsive layout).
- **Logic:** Vanilla JavaScript (ES6+) using Fetch API.
- **Mapping:** [Leaflet.js](https://leafletjs.com/) with **OpenStreetMap** tiles.
- **Data Source:** [Swedish Police API](https://polisen.se/om-polisen/om-webbplatsen/oppna-data/api-over-polisens-handelser/)

# Preview 
This is how the application will look like. It will display all necessary information about the event/crime. If you click url
in any of the map markers it will let you read more about the event/crime. Keep in mind that everything will be in swedish.
<img width="496" height="513" alt="image" src="https://github.com/user-attachments/assets/74d84d42-fd10-4562-9d03-532905664af5" />


# How to use the application
1. Clone the repo
2. Then open the index.html with live server

# License
This project is for educational purposes. Data is provided by the Swedish Police Authority. Please respect their API usage guidelines.
