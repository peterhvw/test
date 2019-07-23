import React, { Component } from 'react'

const Animal = ({animal}) =>
    <div key={animal.id} className="col-sm-6 col-md-3">
      <div className="card text-left">
        <img className="card-img-top" src={`${animal.image}.jpg`} alt="animal image"></img>
        <div className="card-body">
          <h4 className="card-title">{animal.name}</h4>
          <p className="card-text">{animal.body}}</p>
        </div>
      </div>
    </div>;

export default Animal
