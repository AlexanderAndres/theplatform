import React from 'react';
import { Marker } from 'react-map-gl';
import UnimarcPointer from '../../public/UnimarcPoint';

const NewMarker = ({ longitude, latitude, ceco, alert }) => {
    return (
        <Marker longitude={longitude} latitude={latitude} anchor="bottom" >
            <UnimarcPointer className={alert == true ? 'blob' : ''} />
        </Marker>
    )
}

export default NewMarker