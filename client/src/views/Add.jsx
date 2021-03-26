import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';

export default() => {
    const[errors, setErrors] = useState([]);
    const[name, setName] = useState('');
    const[type, setType] = useState('');
    const[description, setDescription] = useState('');

    const CreatePet = e => {
        e.preventDefault();
        console.log('in create pet function')
        axios.post('http://localhost:8000/api/pets/add', {
            name,
            type,
            description
        })
        .then(res=>{console.log(res) 
            navigate('/')}
        )
        .catch(err=>{
            console.log('hfdslifhlsd', err.response.data.errors)
            // console.log(err.response.data.errors.name.message)
            console.log('****')
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
    return(
        <div>
            <Link to={'/'}>back to home</Link>
            <form onSubmit ={ CreatePet }>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>Pet Name: </p>
                <input type ="text" value={name} onChange = {(e) =>setName(e.target.value)}/>
                <p>Pet Type: </p>
                <input type ="text" value={type} onChange = {(e) =>setType(e.target.value)}/>
                <p>Pet Description: </p>
                <input type ="text" value={description} onChange = {(e) =>setDescription(e.target.value)}/>
                <input type="submit" value="Add Pet"/>
            </form>
        </div>
    )
}