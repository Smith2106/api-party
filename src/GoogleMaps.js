import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './GoogleMaps.css';
import GoogleMapsCity from './GoogleMapsCity';

class GoogleMaps extends Component {
    state = {
        city: '',
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/googlemaps/${this.state.city}`);
    }

    render() {
        return (
            <div className="GoogleMaps">
                <img
                    src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/google-maps-wordpress-plugins.png"
                    alt="GoogleMaps"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            required
                            autoFocus
                            type="text"
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up City
                        </button>
                    </div>
                </form>
                <Route 
                    path="/googlemaps/:city"
                    component={GoogleMapsCity} 
                />
            </div>
        );
    }
}

export default GoogleMaps;