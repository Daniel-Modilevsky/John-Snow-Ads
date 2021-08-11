import React, { useEffect, useState, useRef } from "react";
import AdsList from "../ads/adsList";
import MapGOT from "../map/map";
import IMAGES from "../data/images";
import VIDEOS from "../data/videos";

// MAP STATIC SIZE
const MAP_WIDTH = 1280;
const MAP_HEIGHT = 1887;

const HomeScreen = () => {
  const [images, setImages] = useState(IMAGES);
  const [videos, setVideos] = useState(VIDEOS);
  const [ads, setAds] = useState([]);

  let time = "10:50:02";
  let indexImages = 0;
  let indexVideos = 0;
  let turn = 1;

  useEffect(() => {
    setImages(updateAdVaulues(images));
    setVideos(updateAdVaulues(videos));
  }, []);

  useEffect(() => {
    setAds(adsConstructor());
  }, [ads]);

  const pushOneAd = () => {
    if (turn > 0) {
      if (ads.length > 0) {
        setAds(images[indexImages], ...ads);
      } else {
        setAds(images[indexImages]);
      }
      indexImages = indexImages + 1;
      if (indexImages === images.length) {
        indexImages = 0;
      }
    } else {
      if (ads.length > 0) {
        setAds(videos[indexVideos], ...ads);
      } else {
        setAds(videos[indexVideos]);
      }
      indexVideos = indexVideos + 1;
      if (indexVideos === videos.length) {
        indexVideos = 0;
      }
    }
    turn = turn * -1;
    console.log(ads);
  };

  /**
   * generate random coordinate in MAX WIDTH and HEIGHT
   * @returns {Object} coordinate
   */
  const generateRandomCoordinate = () => {
    let x = Math.round(Math.random() * MAP_WIDTH);
    let y = Math.round(Math.random() * MAP_HEIGHT);
    if (x > MAP_WIDTH - 300) {
      x = x - 300;
    }
    if (y > MAP_HEIGHT - 300) {
      y = y - 300;
    }
    return {
      x,
      y,
    };
  };

  const setAdType = (url) => {
    url.toLowerCase();
    if (
      url.includes(".jpg") ||
      url.includes(".jpeg") ||
      url.includes(".png") ||
      url.includes(".gif")
    ) {
      return "IMAGE";
    }
    return "VIDEO";
  };

  const setAdTime = () => {
    let hour = parseInt(time[0] + time[1]);
    let minutes = parseInt(time[3] + time[4]);
    let secondes = parseInt(time[6] + time[7]);
    secondes++;

    //TIME GROW HIRARCHY
    if (secondes === 60) {
      secondes = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hour++;
    }
    if (hour === 24) {
      hour = 0;
    }
    if (secondes < 10) {
      time =
        hour.toString() + ":" + minutes.toString() + ":0" + secondes.toString();
    } else {
      time =
        hour.toString() + ":" + minutes.toString() + ":" + secondes.toString();
    }
    return time;
  };

  const setAdSecondes = () => {
    let hour = parseInt(time[0] + time[1]);
    let minutes = parseInt(time[3] + time[4]);
    let secondes = parseInt(time[6] + time[7]);

    return hour * 3600 + minutes * 60 + secondes;
  };

  const adsConstructor = () => {
    images.forEach((image) => {
      ads.push(image);
    });
    videos.forEach((video) => {
      ads.push(video);
    });
    console.log(ads);
    //SORTING BIGGER FIRST
    ads.sort((a, b) => a.secondes - b.secondes);
    console.log(ads);
    return ads;
  };

  const updateAdVaulues = (adsList) => {
    adsList.forEach((ad) => {
      ad.time = setAdTime();
      ad.type = setAdType(ad.url);
      ad.coordinate = generateRandomCoordinate();
      ad.secondes = setAdSecondes();
    });
    return adsList;
  };

  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#282c34" }}>
        <aside
          style={{
            width: "25%",
            position: "fixed",
            height: "100%",
            padding: 15,
          }}
        >
          <h2 style={{ color: "white", marginLeft: 15 }}> ADS </h2>
          <AdsList ads={ads} />
        </aside>
        <main style={{ flex: 1, overflow: "auto", marginLeft: "25%" }}>
          <MapGOT ads={ads} />
        </main>
      </div>
    </div>
  );
};

export default HomeScreen;
