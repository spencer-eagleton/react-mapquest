import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './index.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoic3BlbmNlcmVhZ2xldG9uIiwiYSI6ImNsMDV4d3c1bzA3anozcG56dHprN2wwMnUifQ.TFk3mmZYSOQVgHCM-Lvf3Q';

export default function App() {
  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  });
  });


  return (
  <>
  <h1>Hello World</h1>

</>
  );
}
