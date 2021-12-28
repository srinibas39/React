import { useState } from "react";
import { connect } from "react-redux";


const Ball=(props)=>{
    console.log(props);
    const [no,setNo]=useState("")
    return (
        <div>
          <h1>balls:{props.balls}</h1>
          <input type="number" value={no} onChange={(e)=>{setNo(e.target.value)}}/>
          <button onClick={()=>{props.buyBall(no)}}>Buy ball</button>
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
        buyBall:(no)=>dispatch({type:"BUY_BALL",payload:no}),
        sellBall:()=>dispatch({type:"SELL_BALL"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball);