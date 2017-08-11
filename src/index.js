import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/imagelist';
import SearchBar from './components/searchbar';
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            images: []
        };
    }
    
    handleTermChange(searchText) {
        // Flickr photo search API call with @camrevalo Image Search app API key
        const key = '4ee036e0fd962d7b940ef195bf6f2b72';
        const defaults = 'format=rest&format=json&nojsoncallback=1&method=flickr.photos.search';
        const url = `https://api.flickr.com/services/rest/?api_key=${key}&${defaults}&text=${searchText}`;
        request.get(url, (err, res) => {
            console.log(res); // log response to console
            if (res.status == 200 && res.body.photos) {
                 console.log(res.body.photos); // logs response or error messages to console
                 this.setState({ images: res.body.photos});
            }
        });
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={searchText => this.handleTermChange(searchText)}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
