import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";

import Modal from "@material-ui/core/Modal";

import { Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const AdListItem = (props) => {
  const [name, setTitle] = useState("none");
  const [type, setType] = useState("IMAGE");
  const [time, setTime] = useState("00:00:01");
  const [url, setURL] = useState("none");
  const classes = useStyles();

  useEffect(() => {
    AdSetter();
  }, []);

  const AdSetter = () => {
    if (props.name) {
      setTitle(props.name);
    }
    if (props.type) {
      setType(props.type);
    }
    if (props.time) {
      setTime(props.time);
    }
    if (props.url) {
      setURL(props.url);
    }
  };

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{name}</h2>
      <div id="simple-modal-description">
        {type === "IMAGE" && (
          <img
            src={url}
            alt={name}
            style={{ height: 300, width: 400, margin: "2%" }}
          />
        )}
        {type === "VIDEO" && (
          <video
            width="400"
            height="300"
            controls
            autoPlay={true}
            muted
            // style={{ width: "90%", height: "90%", margin: "5%" }}
          >
            <source src={url} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <ListItem button className={classes.ad} onClick={handleOpen}>
        <ListItemAvatar>
          {type === "IMAGE" && (
            <Avatar className={classes.blueGrey}>
              <ImageIcon />
            </Avatar>
          )}
          {type === "VIDEO" && (
            <Avatar className={classes.greenGrey}>
              <VideocamIcon />
            </Avatar>
          )}
        </ListItemAvatar>
        <ListItemText
          primary={name}
          disableTypography
          secondary={
            <Typography type="body2" style={{ color: "yellow" }}>
              {time}
            </Typography>
          }
        />
      </ListItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default AdListItem;

const useStyles = makeStyles((theme) => ({
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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
