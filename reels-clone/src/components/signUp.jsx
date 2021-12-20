import * as React from "react";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import "./signUp.css";
import insta from "../images/Instagram-Wordmark-Logo.wine (1).svg";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import CloudUpload from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { storage } from "./firebase";
import { database } from "./firebase";

let SignUp = () => {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

  let handleClick = async () => {
    if (file === null) {
      setError("Please upload your profile picture");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    try {
      setLoading(true);
      setError("");
      let userObj = await signup(email, password);
      // console.log(userObj.user.uid);
      let uid = userObj.user.uid;
      

      const uploadTask = storage.ref(`/data/${uid}/${file.name}`).put(file);
      uploadTask.on("state_changed",fn1,fn2,fn3);

      function fn1(snapshot) {
        let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("Upload is " + progress + "% done");
      }
      function fn2(err) {
        setError(err);
        setTimeout(() => {
          setError("");
        }, 2000);
        setLoading(false);
        return;
      }
      function fn3() {
        uploadTask.snapshot.ref.getDownloadURL().then((URL) => {
          
          database.users.doc(uid).set({
            email: email,
            name: fname,
            userid: uid,
            profileURL: URL,
            createAt: database.getTimestamp,
          });
        });
      }
      setLoading(false);
      history.push("/");
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <>
      <div className="signUp-wrapper">
        <div className="signUp-card">
          <Card variant="outlined">
            <div className="insta-logo">
              <img src={insta} alt="It is logo  of instagram" />
            </div>

            <CardContent>
              <Typography className={classes.text1} margin="dense">
                Sign up to see photos and vidoes from your friends
              </Typography>
              {error != "" && (
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth={true}
                margin="dense"
                size="small"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                fullWidth={true}
                margin="dense"
                size="small"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              <Button
                size="small"
                color="secondary"
                fullWidth={true}
                margin="dense"
                variant="outlined"
                component="label"
                startIcon={<CloudUpload />}
              >
                UPLOAD PROFILE IMG
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </Button>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                fullWidth={true}
                variant="contained"
                onClick={() => {
                  handleClick();
                }}
                disabled={loading}
              >
                Sign up
              </Button>
            </CardActions>
            <CardContent>
              <Typography
                className={classes.text1}
                margin="dense"
                variant="subtitle1"
              >
                By signing up you agree to terms,Data privacy,context policy.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <Typography className={classes.text2} margin="dense">
              Having an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/Login">
                Login
              </Link>
            </Typography>
          </Card>
        </div>
      </div>
    </>
  );
};
export default SignUp;
