import React from "react";
import mapPicture from "../../assets/got-map.png";
import MarkerStack from "./markerStack";

const MapGOT = (props) => {
    const [ads, setAds] = React.useState(props.ads);
  return (
    <div style={{position:"relative"}}>
      <img src={mapPicture} alt="map" style={{ width: "100%", zIndex:0 }} />
      <MarkerStack ads={ads}/>
    </div>
  );
};

export default MapGOT;
