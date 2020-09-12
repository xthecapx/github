import React from "react";
import List from "@material-ui/core/List";
import { useHistory } from "react-router-dom";
import { ListItem, ListItemText, Button } from "@material-ui/core";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/game");
  };

  return (
    <div>
      <h1>Welcome to the GitHub user search game by xthecapx</h1>
      <h2>Instructions</h2>
      <List dense>
        <ListItem>
          <ListItemText primary="1. Search for an user" />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Click on the user requested before the timer ends" />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Start Game
      </Button>
    </div>
  );
};

export default Home;
