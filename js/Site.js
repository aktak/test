import React from 'react';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import AccountCircle from 'material-ui-icons/AccountCircle';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import Tabs, { Tab } from 'material-ui/Tabs';
import Menu, { MenuItem } from 'material-ui/Menu';

const drawerWidth = 250;

const styles = theme => ({

  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 3 + drawerWidth,
    }
  },
});

class Site extends React.Component {

  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const list1 = <List>
      <div>
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
      </div>
    </List>;

    const list2 = <List subheader={<ListSubheader>Settings</ListSubheader>}>
      <div>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="All mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem>
      </div>
    </List>;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        {list1}
        <Divider />
        {list2}
      </div>
    );

    return (
      
      <div className={classes.root}>
        <Hidden mdUp implementation="css">
          <AppBar className={classes.appBar} style={{backgroundColor: 'white'}}>
            <Toolbar style={{paddingLeft:8, paddingRight:8}}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>

              <img src="build/ts.svg" style={{height:27}} />

              <div style={{flex:1}} />

              <div>
                <Button color="inherit" onClick={this.handleMenu}>
                What
                <ArrowDropDown />
                </Button>


                <Button color="inherit" onClick={this.handleMenu}>
                Login
                <ArrowDropDown />
                </Button>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Odhlásiť</MenuItem>
                </Menu>
              </div>


            </Toolbar>
          </AppBar>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar} />
              <Divider />
              {list1}
              <Divider />
              {list2}
            </div>
          </Drawer>
        </Hidden>

        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div>

              <div style={{padding: '30px 27px'}}>
                <img src="build/ts.svg" style={{height:32}} />
              </div>              


              <Divider />
              {list1}
              <Divider />
              {list2}
            </div>

          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Hidden mdUp implementation="css">
          <div className={classes.toolbar} />
          </Hidden>
          <Typography noWrap>{'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
      
    );
  }
}

export default withStyles(styles)(Site);