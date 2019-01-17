class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    };
  }
youTubeSearch(input) {
  //get the input from the search bar
  //query YouTube 
  // ajax method to query YouTube
  //listening at the search bar
  //get the information
  //parse the string
  //iterate through the object
  $.get(URL, callback)
} 


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
