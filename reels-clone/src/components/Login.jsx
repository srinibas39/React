import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import "./Login.css";
import insta from "../images/Instagram-Wordmark-Logo.wine (1).svg";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import bg from "../images/insta.png";
import { Link } from "react-router-dom";
import {useContext,useState} from "react";
import {CarouselProvider,Slider,Slide,Image} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img1 from  "../images/img1.jpg"
import img2 from  "../images/img2.jpg"
import img3 from  "../images/img3.jpg"
import img4 from  "../images/img4.jpg"
import img5 from  "../images/img5.jpg"
import { useHistory } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
let Login = () => {

const {login}=useContext(AuthContext);

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const [loading,setLoading]=useState(false);
const history=useHistory();


  let handleClick=async ()=>{
      setLoading(true);
      try{
          setError("")

          let userObj=await login(email,password);
          console.log(userObj)
          setLoading(false);
          history.push("/")
          
      }
      catch(err){
        
          setError(err);
          setTimeout(()=>{setError("")},2000);
          setLoading(false);

      }
  }




  const useStyle = makeStyles({
    text1: {
      color: "gray",
      textAlign: "center",
    },
    text2: {
      textAlign: "center",
      fontWeight: "bold",
      padding: "2%",
    },
  });
  const classes = useStyle();

  return (
    <>
      <div className="main-wrapper">
        <div className="login-wrapper">
          <div
            className="login-card"
            style={{
              backgroundImage: `url(` + bg + `)`,
              backgroundSize: "cover",
            }}
          >
            <div className="car">
              <CarouselProvider
                visibleSlides={1}
                naturalSlideWidth={100}
                naturalSlideHeight={177}
                totalSlides={5}
                hasMasterSpinner
                isPlaying={true}
                infinite={true}
                dragEnabled={true}
                touchEnabled={true}


              >
                <Slider>
                  <Slide index={0}><Image src={img1}/></Slide>
                  <Slide index={1}><Image src={img2}/></Slide>
                  <Slide index={2}><Image src={img3}/></Slide>
                  <Slide index={3}><Image src={img4}/></Slide>
                  <Slide index={4}><Image src={img5}/></Slide>
                 
                </Slider>
                
              </CarouselProvider>
            </div>
          </div>
        </div>
        <div className="login-wrapper">
          <div className="login-card">
            <Card variant="outlined">
              <div className="insta-logo">
                <img src={insta} alt="It is logo  of instagram" />
              </div>

              <CardContent>
                {error!="" && (
                  <Alert
                    severity="error"
                    variant="standard"
                    margin="dense"
                    size="small"
                  >
                    {error}
                  </Alert>
                )}
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth={true}
                  margin="dense"
                  size="small"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth={true}
                  margin="dense"
                  size="small"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <Typography
                  className={classes.text1}
                  margin="dense"
                  variant="subtitle1"
                >
                  <Link to="/forgotP" style={{ textDecoration: "none" }}>
                    Forgot Password?
                  </Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  fullWidth={true}
                  variant="contained"
                  onClick={()=>{handleClick()}}
                >
                  Log In
                </Button>
              </CardActions>
            </Card>
            <Card variant="outlined">
              <Typography className={classes.text2} margin="dense">
                Don't Having an account?{" "}
                <Link style={{ textDecoration: "none" }} to="/signUp">
                  Signup
                </Link>
              </Typography>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
