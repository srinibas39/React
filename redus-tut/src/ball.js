import { useState } from "react";
import { connect } from "react-redux";
import { buyBall } from "./redux/ballAction";


const Ball=(props)=>{
    console.log(props);
    const [qty,setQty]=useState("")
    return (
        <div>
          <h1>balls:{props.balls}</h1>
          <input type="number" value={qty} onChange={(e)=>{setQty(e.target.value)}}/>
          <button onClick={()=>{props.buyBall(qty)}}>Buy ball</button>
          <button onClick={props.sellBall}>sell ball</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        balls:state.ball.balls
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyBall:(qty)=>dispatch(buyBall(qty)),
        sellBall:()=>dispatch({type:"SELL_BALL"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball);