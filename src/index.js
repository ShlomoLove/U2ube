// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import searchYouTube from '../lib/searchYoutube.js';

ReactDOM.render(<App />, document.getElementById("app"));


// searchYouTube={searchYouTube} query={'Dodgers'}