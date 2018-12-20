import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './component/SeasonDisplay'
import Loading from './component/Loading'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        latitude: null,
        errorMessage: ''
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    const err = this.state.errorMessage && !this.state.latitude ? <p>Error: {this.state.errorMessage}</p> : null
    const renderSeason = !this.state.errorMessage && this.state.latitude ? <SeasonDisplay lat={this.state.latitude} /> : <Loading  message="Please accept location request" />
    return (
      <div>  
        {!this.state.errorMessage ? renderSeason : err}
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

