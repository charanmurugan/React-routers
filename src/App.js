import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from './Components/Home';
 import {Switch,Route,Link} from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className='title'> 
            CM
          </Typography>
          <div className="button-menu">
          <Button className="button button1"  color="inherit"><Link className='menu-item' style={{textDecoration:"none"}}   to="/home">Home</Link></Button>
          <Button className="button button2"  color="inherit"><Link className='menu-item' style={{textDecoration:"none"}}   to="/header">Header</Link></Button>
          <Button className="button button3" color="inherit"><Link className='menu-item'  style={{textDecoration:"none"}}  to="/about">About</Link></Button>
          <Button className="button button4" color="inherit"><Link className='menu-item'  style={{textDecoration:"none"}}  to="/footer">Footer</Link></Button>
          </div>          
        </Toolbar>
      </AppBar>
    </div>
          <Switch>
        <Route  exact path="/header" component={Header} />
        <Route  exact path="/about" component={About}  />
        <Route  exact path="/footer" component={Footer} />
        <Route  exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
