/**
 * Created by cody on 4/13/17.
 */
import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // can access directly by this.refs.map
        return <div ref="map"/>;
    }
}

export default GoogleMap;