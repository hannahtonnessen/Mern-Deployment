import React, {useState, useEffect} from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import { navigate } from '@reach/router';
export default(props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const {id, deleteFromDom} = props;
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
        // .catch(err => {
        //     console.log(err)
        //     console.log('err above')
        // })
    }, [])
    
    const deletePet = (id) => {
        console.log('in delete pet function')
        console.log(id)
        axios.delete('http://localhost:8000/api/pets/delete/' + id)
        .then(res=>{console.log(res) 
            deleteFromDom(id)
            navigate('/')}
        )
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <Link to={'/'}>back to home</Link>
            <h3>Details about: {name}</h3>
            <button onClick={(e)=> {deletePet(id)}}>Adopt {name}</button>
            <p>Pet type: {type}</p>
            <p>Description: {description}</p>
            
        </div>
    )
}