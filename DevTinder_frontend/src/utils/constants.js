// Production
// export const BASE_URL = '/api'

// Development
// export const BASE_URL = 'http://localhost:7000';

// location is an inbuilt object which contains the information about the current page url
// location.hostname - gives the domain name of the url (host of the current site)

// When we are running this locally, the location.hostname = "localhost"

// Making things dynamic 
export const BASE_URL = location.hostname === "localhost"? "http://localhost:7000" :"/api";
