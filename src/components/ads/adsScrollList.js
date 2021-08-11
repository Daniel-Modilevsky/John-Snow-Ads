import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';


function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button key={index}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

export default function AdsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={900} width={300} itemSize={46} itemCount={50} style={{backgroundColor:"#282c34"}}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "10%",
    width: "100%",
    height: 900,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

