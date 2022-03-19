import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const Maps = withScriptjs(withGoogleMap(props =>{
    return(
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        <Marker
            position={{ lat: props.lat, lng: props.lng }}
        />
    </GoogleMap>)
}));

export default Maps;