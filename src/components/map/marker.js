import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

// MAP STATIC SIZE
const MAP_WIDTH = 1280;
const MAP_HEIGHT = 1887;

const Marker = (props) => {
  const [name, setTitle] = useState("none");
  const [url, setUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YR0eyXi3xB-8Cfbg6Q2RF9K9yzxEQjXygA&usqp=CAU"
  );
  const [coordinate, setCoordinate] = useState({ x: 100, y: 100 });
  const [type, setType] = useState("IMAGE");
  const [alive, setAlive] = useState(1);

  const classes = useStyles();

  useEffect(() => {
    markerSetter();
    coordinateValidation();
    setTimeout(() => {
        setAlive(0);
    }, 5000);
  }, []);

  const coordinateValidation = () => {
    if (coordinate.x > MAP_WIDTH - 200) {
      coordinate.x = coordinate.x - 200;
    }
    if (coordinate.y > MAP_HEIGHT - 200) {
      coordinate.y = coordinate.y - 200;
    }
    console.log(coordinate.x, coordinate.y);
  };

  const markerSetter = () => {
    if (props.name) {
      setTitle(props.name);
    }
    if (props.type) {
      setType(props.type);
    }
    if (props.url) {
      setUrl(props.url);
    }
    if (props.coordinate) {
      setCoordinate(props.coordinate);
    }
  };

  return (
    <div>
      {alive && <Tooltip title={name} aria-label="add">
        <Paper
          elevation={3}
          className={classes.paper}
          style={{
            position: "absolute",
            top: coordinate.y,
            left: coordinate.x,
          }}
        >
          {type === "IMAGE" && (
            <img
              src={url}
              alt={name}
              style={{ width: "90%", height: "90%", margin: "5%" }}
            />
          )}
          {type === "VIDEO" && (
            <video
              width="180"
              height="180"
              controls
              autoPlay={true}
              muted
              style={{ width: "90%", height: "90%", margin: "5%" }}
            >
              <source src={url} type="video/mp4" />
            </video>
          )}
        </Paper>
      </Tooltip>}
    </div>
  );
};

export default Marker;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#282c34",
  },
  img: {
    //top: ,
    maxWidth: 360,
    backgroundColor: "#282c34",
  },
  paper: {
    position: "relative",
    width: 200,
    height: 200,
    "&:before": {
      background: "rgba(0, 0, 0, 0.3)",
      content: "",
      top: 0,
      left: 0,
      position: "absolute",
      transform: "translate(1rem, 1rem)",
      height: "100%",
      width: "100%",
      zIndex: -1,
    },
  },
}));
