import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SubCatCard from './SubCatCard'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SubCatGridList(props) {
  const spacing =2;
  const classes = useStyles();
  const [subCatList,setSubCatList]=React.useState([]);
  React.useEffect(()=>{
    fetch(`http://localhost:3001/getSubCatUrl/${props.catName}`)
      .then(response => response.json())
      .then(data =>{
       setSubCatList(data.subcategory)
      }) ;

  })
 
 
  
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {
       
          subCatList.map((value,index) => (
            <Grid key={index} item>
              <SubCatCard subCatName={value.subcat_name}/>
            </Grid>
        
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
