import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
// import YOUTUBE_API_KEY from '../../src/config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: exampleVideoData[0],
      list: exampleVideoData,
    };

    
    // this.props.searchYouTube = this.props.searchYouTube.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }                                                                                                                                                                                                                                               

  componentDidMount() {
    console.log (this.props, 'props');
    // Search.searchButtonClick.bind(this,'Dodgers')
    let options = {
      key: this.props.APIkey,
      query: 'Cute cat',
      max: 5
    };

  
    this.props.searchYouTube.call(this, options, (data) => {
      console.log(data, 'component did mount');
      this.handleSearch(data);
    });
  }

  handleVideoClick(video) {
    this.setState ({
      playing: video,
    });
  } 

  handleInput(videoList) {
    this.setState ({
      list: videoList,
      // playing: videoList[0]
    });
  }

  handleSearch(videoList) {
    this.setState ({
      playing: videoList[0],
      list: videoList,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              handleInput={this.handleInput}
              handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoClick={this.handleVideoClick} 
              videos={this.state.list}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
