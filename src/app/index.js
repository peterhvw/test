import React, { Component } from 'react';
import Control from './components/control';
import AnimalList from './components/animallist';

export default class App extends Component{
   render(){
      return(
         <div className="container py-3">
            <Control/>
            {/* <AnimalList /> */}
         </div>
      );
   }
}