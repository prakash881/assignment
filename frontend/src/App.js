
import './App.css';
import SignIn from './components/SignIn';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Cart from './components/addCart/Cart';
const useStyles = makeStyles(()=>({
  app:{
    background:"url(./ShopCart.png)",
     width:'100%',       
    backgroundSize:' cover',
    height:'100vh'
    
  }

}))
function App() {
  const classes =useStyles();
  return (
    <div className={classes.app}>
      
       <BrowserRouter>
         
              <Routes>
              <Route path="/" element={ <SignIn />} />
              <Route path="/product" element={<Cart/>} />
              </Routes>
       
   </ BrowserRouter>
  
    </div>
  );
}

export default App;
