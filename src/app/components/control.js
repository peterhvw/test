import React, {Component} from 'react'
const axios = require('axios');
 
export default class Control extends Component{
    constructor(props) {
        super(props)
    
        this.state = 
        { 
            doglist: []
        }
    }   
     getDogs() {

        axios.get('https://dog.ceo/api/breed/hound/list')
        .then( (response) => {
            this.setState({ doglist:  [...response.data.message]})
        })
        .catch(  (error) => {
          // handle error
          console.log(error);
        })
        .finally(  res => {
            console.log("done");
          // always executed
        });
      }
    render() {
       return(
        <div className="container py-3">
            <div className="row">
                <div className="btn-group col" role="group" aria-label="">
                    <button type="button" className="col btn btn-primary" onClick={ () => { 
                        this.getDogs()

                    }  
                        }>Soorten honden</button>
                    <button type="button" className="col btn btn-secondary"onClick={ () => { 
                        console.log(this.state.doglist) 

                    }  
                        } >lijst weergeven</button>
                    <button type="button" className="col btn btn-secondary">add</button>
                </div>
            </div>
        </div>
       );
    }
 }

 

