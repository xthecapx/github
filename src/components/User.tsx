import React, { FunctionComponent, useState, MouseEvent } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { ItemType } from "../api/useRequest";

const User: FunctionComponent<ItemType> = ({
  login,
  avatar_url,
  html_url,
  type,
  followers_url,
  subscriptions_url,
  organizations_url,
  repos_url,
}) => {
  const open = (url: string) => {
    window.open(url);
  };

  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url: string) => {
    setAnchorEl(null);

    if (typeof url === "string") {
      open(url);
    }
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="avatar" alt={login} src={avatar_url} />}
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleClose(followers_url)}>
                Followers
              </MenuItem>
              <MenuItem onClick={() => handleClose(subscriptions_url)}>
                Subscriptions
              </MenuItem>
              <MenuItem onClick={() => handleClose(organizations_url)}>
                Organizations
              </MenuItem>
              <MenuItem onClick={() => handleClose(repos_url)}>
                Repositories
              </MenuItem>
            </Menu>
          </>
        }
        title={type}
        subheader={login}
      />
      <CardActions>
        <Button size="small" color="primary" onClick={() => open(html_url)}>
          Go to Profile Page
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;
