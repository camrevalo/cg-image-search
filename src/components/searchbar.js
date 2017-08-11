import React from 'react';

/* class template borrowed from tighten.co */
class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;