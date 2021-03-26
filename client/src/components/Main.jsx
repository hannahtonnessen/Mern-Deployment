import axios from 'axios';
import React, {useEffect} from 'react';
import { Link } from "@reach/router";
import PetList from '../components/PetList';

export default(props) => {
    const {pets, setPets} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/api/pets/all")
        .then(res=> {
            console.log(res);
            console.log("*****")
            console.log('in .then function');
            setPets(res.data);
        })
        .catch(err=>console.log(err))
        console.log('error above')
    }, [])

    return(
        <div>
            <Link to="/pets/add">add a pet to the shelter</Link>
            <p>These pets are looking for a good home</p>
            <PetList pets ={pets} setPets ={setPets}/>
            
        </div>
    )
}