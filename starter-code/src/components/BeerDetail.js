import React, { Component } from 'react'
import { randomBeer } from '../services/beersService';

class BeerDetail extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    beer: [],
    error: false
  }

  componentDidMount = () => {
    if(!this.props.location.key){
      randomBeer()
      .then(response => this.setState({ beer: response.data[0] }))
      .catch(err => this.setState({ error: true }))
    } else {
      randomBeer()
      .then(response => this.setState({ beer: response.data[0] }))
      .catch(err => this.setState({ error: true }))
    }
  }

  render = () => {
    console.log(this)
    return (
     <div className="container">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.state.beer.name}</p>
              <p className="subtitle is-6">{this.state.beer.tagline}</p>
            </div>
          </div>
      
          <div className="content">
            {this.state.beer.description}
            <br/>
            <br/>
            <p>Attenuation level: <strong>{this.state.beer.attenuation_level}</strong></p>
          </div>
        </div>
      </div>
     </div>
    )
  }
  
}

export default BeerDetail 