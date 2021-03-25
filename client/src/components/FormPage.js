import React, { useState, useEffect } from 'react'
import axios from 'axios';
const FormPage = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("")
    const [errors, setErrors] = useState([]);

    const createPlayer = e => {
        e.preventDefault();
        const player = {
            name: name,
            position: position
        }
        console.log(player);
        axios.post("http://localhost:8000/api/players", player) 
            .then(res => {
                console.log(res.data);
                if(res.data.message === "error"){
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)){
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                }else{
                    setErrors("");
                }
            })
            .catch(err => console.log("Error ", err))
    }
    return (
        <div>
            <div className="container w-50 bg-dark p-3 text-white">
                <h1>Add a player</h1>
                <form onSubmit={createPlayer}>
                    <div className="form-group">
                        <label className="form-group" htmlFor="name">Player Name</label>
                        <input className="form-control" type="text" name="name" id="name" placeholder="Enter full name" onChange={e => setName(e.target.value)}/>
                        {/*  */}
                    </div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="position">Preferred Position</label>
                        <input className="form-control" type="text" name="position" id="position" placeholder="Optional" onChange={e => setPosition(e.target.value)}/>
                        {/*  */}
                    </div>
                    {errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
                        <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FormPage
