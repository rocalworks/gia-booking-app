/* Check this one here: https://tomchentw.github.io/react-google-maps */

import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const GMap = compose (
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLY4eXd-dir72J6sCWMsKNIRfXEGi9kzQ&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `350px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => 
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{
            lat: 33.7571021, 
            lng: -84.3480214 
        }}
        >
        {props.isMarkerShown && <Marker position={{ lat: 33.7585908, lng: -84.349531 }} />} 
    </GoogleMap>
);