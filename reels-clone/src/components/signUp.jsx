import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import "./signUp.css"
import insta from "../images/Instagram-Wordmark-Logo.wine (1).svg"
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUpload from "@mui/icons-material/CloudUpload";
import {Link} from "react-router-dom"
let SignUp = () => {

    const useStyle=makeStyles({
          text1:{
            color:"gray",
            textAlign:"center"
          },
          text2:{
              textAlign:"center",
              fontWeight:"bold",
              padding:"2%"
          }
          
          

    })
    const classes=useStyle();
  return (
    <>
      <div className="signUp-wrapper">
        <div className="signUp-card">
          <Card variant="outlined">
              <div className="insta-logo">
                  <img src={insta} alt="It is logo  of instagram"/>
              </div>
            
              
              <CardContent>
                <Typography className={classes.text1} margin="dense" >
                  Sign up to see photos and vidoes from your friends
                </Typography>
                {true && <Alert severity="error" variant="standard" margin="dense" size="small">This is an error alert — check it out!</Alert>}
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth="true" margin="dense" size="small"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth="true" margin="dense" size="small"/>
                <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth="true" margin="dense" size="small"/>
                <Button size="small" color="secondary"  fullWidth="true" margin="dense"  variant="outlined" component="label" startIcon={<CloudUpload/>} >
                UPLOAD PROFILE IMG  
                <input type="file" accept="image/*" hidden/>
              </Button>
              </CardContent>
              <CardActions  >
              <Button size="small" color="primary" fullWidth="true" variant="contained">
                 Sign up
              </Button>
            </CardActions>
            <CardContent>
                <Typography className={classes.text1} margin="dense" variant="subtitle1" >
                  By signing up you agree to terms,Data privacy,context policy.
                </Typography>
  
              </CardContent>
             
          </Card>
          <Card variant="outlined">
          <Typography className={classes.text2} margin="dense" >
                  Having an account? <Link style={{textDecoration:"none"}} to="/Login">Login</Link>
                </Typography>
          </Card>
        </div>
      </div>
    </>
  );
};
export default SignUp;
