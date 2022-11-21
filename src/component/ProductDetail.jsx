import React from 'react';

import { Container,Grid,Typography,CardContent,Card,CardActions,styled, CardMedia,CardActionArea, alertTitleClasses } from '@mui/material';

const Mainbox = styled(Container)`
`

const GridBox = styled(Card)`
 box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`


 
const Extra = ({images,title}) => {
  return (
     <Mainbox>
        <Grid container spacing={5}>
            <Grid item sm ={10} >
                <GridBox>
                    
                <img src={images[0]} alt=""  height="230px"/>
                 <Typography>{title}</Typography>
        </GridBox>
        </Grid>
        </Grid>
        </Mainbox>
  )
}

export default Extra
