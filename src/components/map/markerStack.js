import React, { useState, useEffect } from "react";
import Marker from './marker';

const MarkerStack = (props) => {
  const [markers, setMarkers] = useState([
      {
        title: "test1",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aeN6pViHrPQ-ufs6srPBpKnqskHl6Me8lnpfW3ksc43jG-e9iXW0hxZbvdAtBEGqn8k&usqp=CAU",
        coordinate: {
            x: 123,
            y: 123
        },
        type: "IMAGE"
      },
      {
        title: "test2",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aeN6pViHrPQ-ufs6srPBpKnqskHl6Me8lnpfW3ksc43jG-e9iXW0hxZbvdAtBEGqn8k&usqp=CAU",
        coordinate: {
            x: 400,
            y: 400
        },
        type: "IMAGE"
      },
      {
        title: "test3",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aeN6pViHrPQ-ufs6srPBpKnqskHl6Me8lnpfW3ksc43jG-e9iXW0hxZbvdAtBEGqn8k&usqp=CAU",
        coordinate: {
            x: 900,
            y: 800
        },
        type: "IMAGE"
      },
  ]);
  const [countMarkers, setCountMarkers] = useState(0);


  useEffect(() => {
    getMarkers();
  }, []);

  const getMarkers = async () => {
    if (props.ads) {
        setMarkers(props.ads);
    }
  };

  return (
    <div style={{position:"absolute" , height:"100%", top: 0}}>
        {markers.map((marker) => (
          <Marker
            title={marker.name}
            url={marker.url}
            coordinate={marker.coordinate}
            type={marker.type}  
            key={marker.name}         
          />
        ))}
    </div>
  );
};

export default MarkerStack;
