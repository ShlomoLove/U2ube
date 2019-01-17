import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: exampleVideoData[0],
      list: exampleVideoData
    }
  }
  handleVideoClick(video) {
    console.log('handling click');
    this.setState ({
      playing: video,
    })
  } 

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing}/>
          </div>
          <div className="col-md-5">
            <VideoList
            handleVideoClick={this.handleVideoClick.bind(this)} 
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
