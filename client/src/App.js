import './App.css';
import {Router} from '@reach/router';
import React, {useState} from 'react';
import Main from '../src/components/Main';
import Add from '../src/views/Add';
import Detail from '../src/components/Detail';
import Edit from '../src/views/Edit';

function App() {
  const [pets, setPets] = useState([]);

  const deleteFromDom = petId => {
    setPets(pets.filter(pet => pet._id != petId));
  }
  return (
    <div className="App" style ={{width: "970px", margin: "auto 0px"}}>
      <h1>Pet Shelter</h1>
        <Router >
          <Main path ="/" pets ={pets} setPets ={setPets}/>
          <Add path ="/pets/add"/>
          <Detail path ="/pets/detail/:id" pets ={pets} setPets ={setPets} deleteFromDom={deleteFromDom}/>
          <Edit path ="pets/edit/:id"/>
        </Router>
    </div>
  );
}

export default App;
