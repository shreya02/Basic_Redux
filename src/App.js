import React from 'react';
import './App.css';
import Counter from './counter';
import store from './store/';
import ReduxEx from './rdx'; 
//app folder

function App() {
  return (
    <div>
     <Counter store={store}/>
     <ReduxEx/>
    </div>
  );
}

export default App;
