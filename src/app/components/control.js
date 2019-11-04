import React, {Component} from 'react'
const axios = require('axios');
import {getDogs} from '../api/api'
 
export default class Control extends Component{
    constructor(props) {
        super(props)
    
        this.state = 
        { 
            doglist: [],
            loading: false
        }
    }

    removeDogs() {
        this.state.doglist = [];
    }
      populate_dogs() {
            this.state.loading = true;
            getDogs()
            .then( r => {
                // this.state.doglist = [...r.response.data]
                this.state.doglist = [...r.data.message]
                this.state.loading = false;               
            })
            .catch(  (error) => {
                // handle error
                console.log(error);
            })
     }

    render() {
       return(
        <div className="container py-3">
            <div className="row">
                <div className="btn-group col" role="group" aria-label="">
                    <button type="button" className="col btn btn-primary" onClick={ () => { 
                        this.populate_dogs();
                    }}>Soorten honden</button>
                    <button type="button" className="col btn btn-secondary" onClick={ () => { 
                        console.log(this.state.doglist);
                    }}>lijst weergeven</button>
                    <button type="button" className="col btn btn-secondary" onClick={ () => { 
                        this.removeDogs();
                    }}>add</button>
                </div>
            </div>
        </div>
       );
    }
 }

 

