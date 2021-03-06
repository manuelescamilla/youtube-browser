import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const config = require('./config/default');

const API_KEY = config.google.youtube;

class App extends Component {
    constructor (props) {
        super (props);

        this.state = { 
            videos: [],
            selectedVideo: null
     };

     this.videoSearch('doraemon');
    }

    // We create a callback for search
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //this.setState({ videos: videos });
             this.setState({
                 videos,
                 selectedVideo: videos[0]
                });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return(
            <div>
                <SearchBar className="search-bar" 
                //onSearchTermChange={term => this.videoSearch(term)}/>
                onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}
// Step 1 Pass another function to VideoList onVideoSelect


// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));