import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    console.log("render",props);
  return (
    <div>
      <h2>Hello.I am a counter. </h2>
      <p>Count:{props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>   
    </div>
  )
}

function mapStateToProps(state)
{       
    console.log("mapstatetoprops", state)
    return{
        count:state.count
        }
}

function mapDispatchToProps(dispatch)
{
    return{
    onIncrementClick:()=>
    {
        console.log("clicked")
        const action={type :'INCREMENT'};
        dispatch(action);
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
