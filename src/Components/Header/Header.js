import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import logoLindo from '../../logoLindo.png'
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    appBar: {
      height: 60,
    }
  }));
  
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
          </div>
        </Zoom>
      );
    }
    
    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      window: PropTypes.func,
    };
    
    function Header(props) {
      return (
        <React.Fragment>
          <CssBaseline />
          <AppBar style={{ background: '#000000' }}>
            <Toolbar>
              {/* <Typography variant="h6">Logo</Typography> */}
              <img src={logoLindo} height="45" width="45" />
            </Toolbar>
          </AppBar>
          <Toolbar id="back-to-top-anchor" />
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </React.Fragment>
      );
    }

export default Header;
