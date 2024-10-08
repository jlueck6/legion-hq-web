import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import DataContext from 'context/DataContext';
import llbLogoLight from 'assets/llbLogoLight.png';
import llbLogoDark from 'assets/llbLogoDark.png';

const useStyles = makeStyles(theme => ({
  grow: { flexGrow: 1 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  desktopOnly: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    }
  }
}));

function DefaultBar() {
  const classes = useStyles();
  const { userSettings, setIsDrawerOpen } = useContext(DataContext);
  return (
    <Toolbar variant="dense">
      <IconButton
        color="inherit"
        edge="start"
        className={classes.menuButton}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <img
        alt="Legion HQ Logo"
        src={userSettings.themeColor === 'light' ? llbLogoLight : llbLogoDark}
        style={{ height: 35 }}
      />
      <div className={classes.grow} />
      {false && (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      )}
    </Toolbar>
  );
}

function ActionBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="secondary">
        <DefaultBar />
      </AppBar>
      <div style={{ height: 55 }} />
    </div>
  );
};

export default ActionBar;
