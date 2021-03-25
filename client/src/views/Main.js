import React, {useState, useEffect} from 'react';
import FormPage from '../components/FormPage';
import PlayersList from '../components/PlayersList';
import axios from 'axios';

const Main = () => {
    const [active, setActive] = useState("players");
    const [loaded, setLoaded] = useState(false);
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                setAllPlayers(response.data.results);
                setLoaded(true);
                console.log(response.data.results);
            })
            .catch(err => console.log("Errors", err));
    }, [])
    return (
        <div>
            <div className="container">
                {
                    active === "players" ? 
                    <div>
                        <button onClick={() => setActive("players")} className="btn btn-secondary m-2">Current Roster</button> 
                        <button onClick={() => setActive("add")} className="btn btn-primary m-2">Add Players</button>
                        <h3 style={{display: 'inline-block', float: 'right', color: "#007bff"}}>Manage Players</h3>
                    </div>
                    : 
                    <div>
                        <button onClick={() => setActive("players")} className="btn btn-primary m-2">Current Roster</button> 
                        <button onClick={() => setActive("add")} className="btn btn-secondary m-2">Add Players</button>
                        <h3 style={{display: 'inline-block', float: 'right', color: "#007bff"}}>Manage Players</h3>
                    </div>
                }
                <div className="container border p-5">

                {
                    active === "players" ?
                    <PlayersList loaded={loaded} allPlayers={allPlayers} setAllPlayers={setAllPlayers}/> :
                    <FormPage allPlayers = {allPlayers} setAllPlayers={setAllPlayers} />
                }
                </div>
            </div>
        </div>
    )
}

export default Main
