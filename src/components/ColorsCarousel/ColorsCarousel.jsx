import React, {useEffect, useRef} from 'react'
import {Typography} from '@material-ui/core';
import Brightness1SharpIcon from '@material-ui/icons/Brightness1Sharp';
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


//custom hookss
import useItemColor from '../../hooks/useItemColor/useItemColor';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
  }
));

const ColorsCarousel = () => {

    const classes = useStyles();
    const {selectedColor, listColors, selectNewColor} = useItemColor();
    const imgRef = useRef();

    useEffect(() => {
        
        document.title = `Color: ${selectedColor}`;
        const imgResource = listColors.find(x => x.label === selectedColor).image;
        const imgCurrent = imgRef.current;

        imgCurrent.src = imgResource;

    },[selectedColor, listColors]);
    
    return ( 
        <>
          <Grid className={classes.root} container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <Box>
                    <Typography variant="h6" color="inherit" align="center" gutterBottom>
                        New Iphone 12
                    </Typography>
                
                    <Box m={0} justifyContent="center">
                        <img ref={imgRef}  width="100%" height="100%" alt="iphone"/>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box>
                    <Typography variant="h6" color="inherit" align="center" gutterBottom>
                        Selected {selectedColor}
                    </Typography>

                    <Grid container  className={classes.root} mt="1" spacing={1}>
                        {
                            listColors.map((x, index) => 
                                <Grid item key={index} xs={12} sm={6} md={4} >
                                    <Box color="primary.contrastText" p={2} my={1}>
                                        <Button 
                                            onClick={() => selectNewColor(x.label)}
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            startIcon={
                                                <Brightness1SharpIcon style={{color: x.color}}
                                            >
                                            </Brightness1SharpIcon>}
                                        > 
                                            {x.label}
                                        </Button>
                                    </Box>
                            </Grid> 
                            )
                        }
                    </Grid>
                </Box>
            </Grid>
          </Grid>
      </>
    );
}
 
export default ColorsCarousel;