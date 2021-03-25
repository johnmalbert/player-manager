import React, {useState, useEffect} from 'react';
import Game1 from '../components/Game1';
import Game2 from '../components/Game2';
import Game3 from '../components/Game3';
import axios from 'axios';
import { Link } from '@reach/router';

const Manager = props => {
    const { num } = props;
    const [allPlayers, setAllPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    const updateStatus = (player, index, setStatus) => {
        const active = [0,0,0]
        active[index] = setStatus;
        const obj = {active};
        
        axios.put(`http://localhost:8000/api/players/${player._id}`, obj)
        .then(res => {
            console.log(res.data);
            console.log(allPlayers);
            setLoaded(false);
        })
        .catch(err => console.log("error", err));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                setAllPlayers(response.data.results);
                setLoaded(true);
                console.log(response.data.results);
            })
            .catch(err => console.log("Errors", err));
    }, [loaded])
    return (
        <div>

            {
                num === "1" ? 
                <div className="container">
                    <h1 className="text-center"> 
                        <Link to="/manage/game/1"><button className="btn btn-secondary"> Game 1 </button></Link>
                        <button className="btn"><Link to="/manage/game/2"> Game 2 </Link></button>
                        <button className="btn"><Link to="/manage/game/3"> Game 3 </Link></button>
                    </h1>
                    <Game1 allPlayers = {allPlayers} loaded={loaded} updateStatus={updateStatus}/>
                </div>
                : 
                num === "2" ?
                <div className="container">
                    <h1 className="text-center"> 
                        <button className="btn"><Link to="/manage/game/1"> Game 1 </Link></button>
                        <Link to="/manage/game/2"><button className="btn btn-secondary"> Game 2 </button></Link>
                        <button className="btn"><Link to="/manage/game/3"> Game 3 </Link></button>
                    </h1>
                    <Game2 allPlayers = {allPlayers} loaded={loaded} updateStatus={updateStatus}/>
                </div>
                :
                num === "3" ?
                <div className="container">
                    <h1 className="text-center"> 
                        <button className="btn"><Link to="/manage/game/1"> Game 1 </Link></button>
                        <button className="btn"><Link to="/manage/game/2"> Game 2 </Link></button>
                        <Link to="/manage/game/3"><button className="btn btn-secondary"> Game 3</button></Link>
                    </h1>
                    <Game3 allPlayers = {allPlayers} loaded={loaded} updateStatus={updateStatus}/>
                </div>
                :
                <h3>No game with the number {num}</h3>
            }
        </div>
    )
}

export default Manager
