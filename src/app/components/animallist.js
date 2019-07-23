
import React from 'react'
import {Animal} from './animal';

const AnimalList = ({animals}) =>
  <div className="row mt-3">
      {animals.map(animal =>
        <Animal key={animal.id} animal={animal} />
      )}
  </div>;

export default AnimalList


 
