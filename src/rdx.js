import React, {Component} from 'react';
import {createStore} from 'redux';

//define a reducer that contains state and actions to change state//step2 but first
//store create with reducers help in it 
//subscribe to the store so that we get the state
//dispatch an action giving the state on triggering of action by component

class ReduxEx extends Component
{
    render()
    {
        //defined reducer to create a store next
            const reducer=function(state,action)
            {
                if(action.type==="HELLO")
                {
                    return action.payload
                }
                if(action.type==="ATTACK")
                {
                    return action.payload
                }
                return state
                
            }
            //created a store with the help of reducer
            const store= createStore(reducer,"xyz")
            
            //subscribing to that store to get state values
            store.subscribe(()=>
            {
                console.log("Yayy, subscribed to store", store.getState())
            })
            //dispatch the states 
            store.dispatch({type:"HELLO",payload:"ironman"}) //sending commands
            store.dispatch({type:"ATTACK", payload:"superman"})
        
            return(
                <div>
                    test
                </div>               
            )
           
    }
}


export default ReduxEx;