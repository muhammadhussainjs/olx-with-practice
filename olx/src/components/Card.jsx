import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function MediaCard({src , amount , description , onClick , showbutton=true , showminus=true , showplus=true , showone=true }) {

  const [amounts , setamounts] = useState(1)

  function addnumber(){
    
      setamounts(amounts + 1)
  }
  const minusnumber = () => {
    if (amounts > 1) {
      setamounts(amounts - 1);
    } else {
      alert('Sorry, the minimum value is 1.');
    }
  };

  return (

    


    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia
        sx={{ height: 140 }}
        image={src}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {amount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
       {showbutton ? <Button size="small" >GOTODETAIL</Button> : null}
      </CardActions>
      <CardActions>
       {showminus ? <Button size="small" onClick={minusnumber} >-</Button> : null}  
       {showone ? <Button size="small" >{amounts}</Button> : null}  
       {showplus ? <Button size="small" onClick={addnumber} >+</Button> : null}
      </CardActions>
    </Card>
       
  );
}
