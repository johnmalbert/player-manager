import React, { useState } from 'react'
import axios from 'axios';
const FormPage = props => {
    const { allPlayers, setAllPlayers } = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("")
    const [errors, setErrors] = useState([]);
    const [bats, setBats] = useState("R");
    const [throws, setThrows] = useState("R");

    const createPlayer = e => {
        e.preventDefault();
        const player = {
            name: name,
            position: position,
            bats: bats,
            throws: throws
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
                    alert(`${player.name} was added to your roster!`);
                    setAllPlayers(
                        [...allPlayers, res.data.results]
                    )
                    setName("");
                    setPosition("");
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
                        <input className="form-control" type="text" name="name" id="name" placeholder="Enter full name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="position">Preferred Position</label>
                        <input className="form-control" type="text" name="position" id="position" placeholder="Optional" value={position} onChange={e => setPosition(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label className="form-group" htmlFor="bats">Bats</label>
                                <input className="form-control" type="text" name="bats" id="bats" placeholder="Optional" value={bats} onChange={e => setBats(e.target.value)}/>
                            </div>
                            <div className="col">
                                <label className="form-group" htmlFor="throws">Throws</label>
                                <input className="form-control" type="text" name="throws" id="throws" placeholder="Optional" value={throws} onChange={e => setThrows(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    {
                        errors ? 
                        errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)
                        : ""
                    }
                        <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FormPage
