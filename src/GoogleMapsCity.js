/*global google*/
import React, { Component } from 'react';

import './GoogleMapsCity.css';

class GoogleMapsCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: {},
        };

        this.fetchUserData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.city !== this.props.match.params.city) {
            this.fetchUserData();
        }
    }

    fetchUserData = () => {
        const { city } = this.props.match.params;
        const geocoder = new google.maps.Geocoder();
        let map;

        geocoder.geocode( { 'address': city }, (results, status) => {
            if (status == 'OK') {
                console.log(results);
                const latlng = results[0].geometry.location;
                console.log(this.refs.map);
                map = new google.maps.Map(this.refs.map, {
                    zoom: 12,
                    center: latlng,
                });
                console.log(map);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    render() {
        return (
            <div className="GoogleMapsCity">
                <div className="maps" ref="map" />
            </div>
        );
    }
}

export default GoogleMapsCity;