import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
        <div className="search-bar">
            <input 
            value={this.state.term}
            //onChange={event => this.setState({ term: event.target.value})} 
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    // call back is outside render method
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term); // access to onSearchTermChange thorugh props
    }
}

export default SearchBar;