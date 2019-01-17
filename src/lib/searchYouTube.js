var searchYouTube = (options, callback) => {
  let url = 'https://www.googleapis.com/youtube/v3/search'
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
    },

    success: data => { callback(data.items); },
    error: err => {console.log(err, 'err')}
   
  })
};

export default searchYouTube;
