import React from 'react';
import { Link } from "@reach/router";
// import axios from "axios";

export default(props) => {
    const {pets, setPets} = props;


    return(
        <div>
            <table style ={{marginLeft: "300px", border: "solid 2px black"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        {pets.map((pet, i) => {
                            return(
                            <p >
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`pets/detail/${pet._id}`}><button >details</button></Link><Link to={`pets/edit/${pet._id}`}><button>edit</button></Link></td>
                            </p>)
                        })}
                    </tr>
                </tbody>
            </table>  
        </div>
    )
}