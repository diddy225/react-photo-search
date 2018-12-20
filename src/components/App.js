import React from 'react';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'


class App extends React.Component {
  state = { pics: [] }

  onSearchSubmit = async (term) =>{
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({
      pics: response.data.results
    })
  }

  render() {
    let numResults = !this.state.pics.length ? null :  `Found:  ${this.state.pics.length}` 
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {numResults}
        <ImageList pics={this.state.pics} />
      </div>
    )
  }
}

export default App