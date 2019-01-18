import searchYouTube from '../../src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';
import App from './App.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    };

    this.searchButtonClick = this.searchButtonClick.bind(this);
    this.searchInput = this.searchInput.bind(this);
  }


  searchInput(input) {
    console.log (input.target.value, 'input searchInput');
    input = input.target.value;
    //get the input from the search bar
    //query YouTube 
    // ajax method to query YouTube
    //listening at the search bar
    //get the information
    //parse the string
    //iterate through the object

    this.setState ({ 
      query: input
    });

    let searchInfo = {
      key: YOUTUBE_API_KEY,
      query: input,
      max: 5
    };

    searchYouTube(searchInfo, (data) => {
      this.props.handleInput(data);
    });

  } 

  searchButtonClick(input) {
    console.log (this.state.query, 'input');
    if (input) {
      input = input;
    } else {
      input = this.state.query;
    }
    let searchInfo = {
      key: YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5
    };

    searchYouTube(searchInfo, (data) => {
      this.props.handleSearch(data);
      // this.setState ({
      //   playing: data.items[0],
      //   list: data
      // })
    });
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={ this.searchInput } />
        <button className="btn hidden-sm-down" onClick={ this.searchButtonClick }>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
