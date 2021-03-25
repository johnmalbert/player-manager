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
                <h1>Hey this is the main!</h1>

                <button onClick={() => setActive("players")} className="btn btn-primary m-2">Manage Players</button>
                <button onClick={() => setActive("add")} className="btn btn-primary m-2">Add Players</button>
                <div className="container border p-5">

                {
                    active === "players" ?
                    <PlayersList loaded={loaded} allPlayers={allPlayers}/> :
                    <FormPage />
                }
                </div>
            </div>
        </div>
    )
}

export default Main
