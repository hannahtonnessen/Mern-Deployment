import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';


export default(props) => {
    const{id} = props;
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(()=> {
        console.log(id)
        axios.get('http://localhost:8000/api/pets/' + id)
        .then(res => {
            console.log(res.data);
            console.log(res.data.name)
            console.log(res.data.type)
            console.log(res.data.description)
            console.log("************")
            setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);

        })
        .catch(err => {
            console.log(err)
            console.log('err above')
        })
    }, [])

    const EditPet = e => {
        e.preventDefault();
        console.log('in edit pet function')
        console.log(id)
        axios.put('http://localhost:8000/api/pets/edit/' + id, {
            name,
            type,
            description
        })
        .then(res=>{console.log(res) 
            navigate('/')}
        )
        .catch(err=>{
            console.log('hfdslifhlsd', err.response.data.errors)
            console.log(err.response.data.errors)
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
            <h3>Edit name</h3>
            <form onSubmit ={ EditPet }>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>Pet Name: </p>
                <input type ="text" value={name} onChange={(e) => { setName(e.target.value) }}/>
                <p>Pet Type: </p>
                <input type ="text" value={type} onChange={(e) => { setType(e.target.value) }}/>
                <p>Pet Description: </p>
                <input type ="text" value={description} onChange={(e) => { setDescription(e.target.value) }}/>
                <input type="submit" value="Add Pet"/>
            </form>
        </div>
    )
}