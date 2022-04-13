import React from 'react'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Button, Checkbox } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

// styling using material ui 
const useStyles= makeStyles(()=>({
    Container:{
        display :'flex', 
        justifyContent:'center', 
        alignItems:'center',
       height:'100vh'
       
        
    },
    root:{
       
       padding:'30px',
       backgroundColor:'#FFFFFFB2',
        borderRadius:'2em'
      
    },
    checkBox:{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
    },
    login:{
    alignItems:'center',
     background: '#DB4700',
     borderRadius:'2em'
    }





}))

function SignIn() {
 // initililise  the react route  acc to v6
  let navigate = useNavigate() ;

  //
  // const handlechange =()=>{
  //   let path =`${<Cart/>}`
  //   navigate(path)
  // }

   const classes= useStyles() ;
  return (
      <Container  className={classes.Container}>
    <div className={classes.root}>
        <form >
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
           
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
          />
        
          
            <Grid  className={classes.checkBox}>
            <FormControlLabel
            control={<Checkbox value="remember"  />}
            label="Remember me"
          />
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
        
           
            <Grid  
            style={{ display :'flex', 
              justifyContent:'center', 
                 alignItems:'center',
               flexDirection:'column'  }}>
        <Button
          
          variant="contained"
          className={classes.login}
         onClick={()=> navigate(`/product`)} 
        >
          Sign In
        </Button>  
        <Link href="/signup" variant="body2">
                {"Don't have an account? Sign up"}
              </Link>    
            </Grid>
          
        </form>


    </div>
    </Container>
  )
}

export default SignIn