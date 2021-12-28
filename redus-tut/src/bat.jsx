import {useState} from "react"
import { connect } from "react-redux";
const Bat=(props)=>{
//  const [bat,setBat]=useState(20)
console.log(props)
  return (
     <div>
        {/* <h1>Bat:{bat}</h1>
        <button onClick={()=>{setBat(bat-1)}}>Buy Bat</button> */}
      <h1>Bats:{props.bats}</h1>
      <button onClick={props.buyBat}>Buy Bats</button>

     </div>
  );
}

const mapStateToProps=(state)=>{
    return {
        bats:state.bats
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyBat:()=>dispatch({
            type:"BUY_BAT"
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat);