// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import searchYouTube from './lib/searchYoutube.js';
import exampleVideoData from './data/exampleVideoData.js';
import YOUTUBE_API_KEY from './config/youtube.js';


ReactDOM.render(<App APIkey={YOUTUBE_API_KEY} searchYouTube={searchYouTube} videos={exampleVideoData}/>, document.getElementById('app'));
