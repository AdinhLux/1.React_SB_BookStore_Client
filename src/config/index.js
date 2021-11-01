// We map the web client to the backend endpoint URL
const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');

// When running the app on Heroku, open the console and type 'window.location.hostname' to get this data
environmentUrls.set('adinh-book-demo-store-web.herokuapp.com', 'https://adinh-book-demo-store.herokuapp.com');

// window.location.hostname will return 'http://localhost:8080' or 'https://adinh-book-demo-store.herokuapp.com'. Depending where you start the application.
export default environmentUrls.get(window.location.hostname);