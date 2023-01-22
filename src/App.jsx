import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import Map, {
  Marker, Popup
} from 'react-map-gl';
import UnimarcPointer from '../public/UnimarcPoint';
import LeftMenu from './components/LeftMenu';
import LogoSmu from '../public/SmuLogo';
import UserMarkers from './components/UserMarkers';

const accessToken = 'pk.eyJ1IjoiYmFsYW54Y2UiLCJhIjoiY2xjbTZucGZ5M2tlYTNvcDR6amhwbTh1eCJ9.wFC-K6LRK1r__17CIt_ypw';

const points = [
  { longitude: -71.55431230066509, latitude: -33.01559509684574, cadena: 'unimarc', ceco: 1, alert: false },
  { longitude: -71.55706310004389, latitude: -33.028719662189296, cadena: 'unimarc', ceco: 2, alert: true },
  { longitude: -71.54954404114832, latitude: -33.02263808668426, cadena: 'unimarc', ceco: 3, alert: false },
  { longitude: -71.52958000004391, latitude: -32.98032506248038, cadena: 'unimarc', ceco: 4, alert: false },
];

function App() {
  const mapRef = useRef();
  const [lng, setLng] = useState(-71.5433);
  const [lat, setLat] = useState(-33.0029);
  const [zoom, setZoom] = useState(13);
  const [locales, setLocales] = useState(points);
  const copyLocales = locales;

  const [popupInfo, setPopupInfo] = useState(null);
  //() => handdleAlert(point.ceco)

  const pins = useMemo(
    () => locales.map(point => (
      <Marker
        onClick={e => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo(point);
        }}
        longitude={point.longitude} latitude={point.latitude} key={`marker-${point.ceco}`} anchor="bottom" >
        <UnimarcPointer className={(point.alert == true) ? 'blob' : ''} />
      </Marker>
    )),
    []
  );

  const onMapLoad = useCallback(() => {
    console.log('Map Loaded');
    mapRef.current.on('move', () => {
      setLng(mapRef.current.getCenter().lng.toFixed(4));
      setLat(mapRef.current.getCenter().lat.toFixed(4));
      setZoom(mapRef.current.getZoom().toFixed(2));
    });

  }, []);

  const handdleAlert = (key) => {
    const localesStateReview = copyLocales.map((local) => {
      if (local.ceco == key) {
        local.alert = !local.alert;
        return local;
      } else {
        return local;
      }
    });

    //console.log('New Locales:', localesStateReview);
    setLocales(localesStateReview);
  };

  return <div className="map-container">
    <Map
      ref={mapRef} onLoad={onMapLoad}
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: zoom,
      }}
      mapStyle="mapbox://styles/balanxce/clct3r28c000314n7kkbug9o9"
    >
      <LogoSmu className='logo' />
      <UserMarkers/>
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            {popupInfo.ceco} | {popupInfo.alert ? 'true' : 'false'}
          </div>
        </Popup>
      )}
      <LeftMenu />
      <UserMarkers/>
    </Map >
  </div>;
}

export default App;
/*
{
  locales.map(point => {
    return (
      <Marker onClick={() => handdleAlert(point.ceco)}
        longitude={point.longitude} latitude={point.latitude} key={`marker-${point.ceco}`} anchor="bottom" >
        <UnimarcPointer className={(point.alert == true) ? 'blob' : ''} />
      </Marker>
    );
  })
}
*/
/*
{
        locales.map(point => {
          console.log('Points:', point)
          return (
            <Marker onClick={() => handdleAlert(point.ceco)} longitude={point.longitude} latitude={point.latitude} key={point.ceco} anchor="bottom" >
              <UnimarcPointer className={alert == true ? 'blob' : ''} />
            </Marker>
          );
        })
      }
<Marker longitude={-71.55431230066509} latitude={-33.01559509684574} anchor="bottom" >
        <UnimarcPointer className='blob' />
      </Marker>
      <Marker longitude={-71.55706310004389} latitude={-33.028719662189296} anchor="bottom" >
        <UnimarcPointer className='' />
      </Marker>
      <Marker longitude={-71.54954404114832} latitude={-33.02263808668426} anchor="bottom" >
        <UnimarcPointer className='blob' />
      </Marker>
      <Marker longitude={-71.52958000004391} latitude={-32.98032506248038} anchor="bottom" >
        <UnimarcPointer className='' />
      </Marker>
*/