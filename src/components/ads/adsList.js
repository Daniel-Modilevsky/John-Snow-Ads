import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { blueGrey } from "@material-ui/core/colors";
import AdListItem from "./adsListItem";
import InputAdornments from "./adForm";
import { FixedSizeList } from "react-window";

export default function SimpleList(props) {
  const [ads, setAds] = useState([
    {
      name: "one",
      type: "IMAGE",
      time: "10:10:10",
    },
    {
      name: "two",
      type: "VIDEO",
      time: "11:11:11",
    },
    {
      name: "three",
      type: "IMAGE",
      time: "12:12:12",
    },
  ]);
  const [min, setMin] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    listSetter();
    setMin(minTime());
  }, [min]);

  const minTime = () => {
    let min = 1000000;
    ads.forEach((ad) => {
      if (min > ad.secondes) {
        min = ad.secondes;
      }
    });
    return min;
  };

  const listSetter = () => {
    if (props.ads) {
      setAds(props.ads);
    }
  };

  
  return (
    <div className={classes.root}>
      <InputAdornments min={min} />
      <List component="nav" aria-label="main mailbox folders" 
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      >
        {ads.map((ad) => (
          <AdListItem
            name={ad.name}
            type={ad.type}
            time={ad.time}
            url={ad.url}
            key={ad.name}
          />
        ))}
      </List>
      <Divider />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#282c34",
  },
  blueGrey: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: "#99BADD",
  },
  greenGrey: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: "#8FBC8F",
  },
  ad: {
    color: "white",
    fontSize: 18,
    "&:hover": {
      color: "#2196f3",
      fontWeight: "bold",
      fontSize: 18,
    },
  },
}));
