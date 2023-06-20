import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SimpleBadge from './CartWidget';


export default function ButtonAppBar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

      
        <Toolbar>
        <img src='https://res.cloudinary.com/dkhpws3ib/image/upload/v1686700110/cld-sample-3.jpg' alt='logo jugando basket felices' style={{ width: '50px', height: '50px',  }} /><p>Importalo</p>
        
          <IconButton
            
          >
    
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
   
          </Typography>
          
          <Button color="inherit">Promiciones</Button>
          <Button color="inherit"> Remeras traidas de usa </Button>
          <Button color="inherit"> Remeras exclusivas  </Button>
          <SimpleBadge /> 

        
          
        </Toolbar>
        
      </AppBar>
      
    </Box>
  );

}
