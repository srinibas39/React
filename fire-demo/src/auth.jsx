import { useEffect, useState } from "react";
import { auth } from "./firebase";

let Auth = () => {
  let [email, setEmail] = useState("");
  let [password, SetPassword] = useState("");
  let [user, setUser] = useState("");

  let signUp = async () => {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    console.log(res);
  };
  let signOut = async () => {
    await auth.signOut();
  };
  let signIn=async ()=>{
      await auth.signInWithEmailAndPassword(email,password);
  }
  useEffect(() => {
    let unsub=auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
        unsub(); //claen up;
    };
  }, []);

  return (
    <>
      {user == null ? (
        <div className="main">
          <label htmlFor="username">username</label>
          <input
            className="username"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">password</label>
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
          />
          <button
            className="signin"
            onClick={() => {
              signIn();
            }}
          >
            signIn
          </button>
          <button onClick={()=>{signUp()}} >sign up</button>
        </div>
      ) : (
        <>
          <div>{user.uid}</div>
          <button
            className="signOut"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </>
      )}
    </>
  );
};

export default Auth;
