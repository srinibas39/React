import Auth from "./auth";
import Firestore from "./firestore";
import Fstorage from "./Fstorage";


let App=()=>{
  return <>
  <Auth/>
  {/* <Firestore/> */}
  <Fstorage/>
  
  </>
}

export default App;