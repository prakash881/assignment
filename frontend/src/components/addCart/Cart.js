import { Container, Typography , Grid, TextField, Box, Button} from '@material-ui/core'
import React from 'react'
import {items} from './items'
import { makeStyles } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search';
import Header from './Header.js/Header';
const useStyles=makeStyles(()=>({

    CartStyle :{
        width:'70%',
        margin:'0 auto'
        
    },
    search:{
       
    },
    CartItems:{
       display:'flex',
       justifyContent:'space-between' 
    },
    image:{
        width:'30%',
        height:'20%',

    },
    itemsDetails:{
        width:'62%',

    },
    purchaseItems:{
        display :'flex', 
        justifyContent:'center', 
        alignItems:'center',
       background: '#DB4700',
       borderRadius:'2em'
    }
        
    
}))

const Cart = () => {
    const classes = useStyles()
  return (
      <Container>
         <div className={classes.CartStyle}>  
            <Grid>
               <Header />
            </Grid>
            <Grid>
            <TextField className={classes.search} fullWidth label=" Search" variant="outlined" />

               <Grid>
                  <h3> Add ITems</h3>
    {
       items.map(e=>(
         <Grid className={classes.CartItems}>
             <Box className={classes.image}>{e.image}</Box>
             <Box className={classes.itemsDetails}>
             <Typography>{e.name}</Typography>
             <Typography>{e.amount}</Typography>
             </Box>
             </Grid>
       ))
    }

         
               </Grid>
               <Button className={classes.purchaseItems} > Procced items </Button>
            </Grid>
         </div>
    </Container>
  )
}

export default Cart