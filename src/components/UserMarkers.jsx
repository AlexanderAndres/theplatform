import { useEffect, useMemo, useState } from 'react'
import Map, {
    Marker, Popup
} from 'react-map-gl'
import UnimarcPointer from '../../public/UnimarcPoint';

const url = "https://smu-api.herokuapp.com/api/local";

const UserMarkers = () => {
    const [locales, setLocales] = useState([])

    useEffect(() => {
        fetch(url).then(resp => resp.json()).then(data => {
            setLocales(data.data)
        });

    }, []);

    const pins = useMemo(
        () => locales.map(point => (
            <Marker
                onClick={e => {
                    // If we let the click event propagates to the map, it will immediately close the popup
                    // with `closeOnClick: true`
                    e.originalEvent.stopPropagation();
                    setPopupInfo(point);
                }}
                longitude={point.length} latitude={point.latitude} key={`marker-${point.ceco}`} anchor="bottom" >
                <UnimarcPointer className={(point.alert == true) ? 'blob' : ''} />
            </Marker>
        )),
        []
    );

    return <div>
        {
            locales.map(point => (
                <Marker
                    onClick={e => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.originalEvent.stopPropagation();
                        setPopupInfo(point);
                    }}
                    longitude={point.length} latitude={point.latitude} key={`marker-${point.ceco}`} anchor="bottom" >
                    <UnimarcPointer className={(point.alert == true) ? 'blob' : ''} />
                </Marker>
            )
            )
        }
    </div>
}

export default UserMarkers