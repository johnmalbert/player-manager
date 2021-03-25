import React from 'react'
import DeleteButton from './DeleteButton';
import guy from '../guy.jpg';
const PlayersList = props => {
    const { allPlayers, setAllPlayers, loaded } = props;
    
    const removeFromDom = playerId => {
        setAllPlayers(allPlayers.filter(player => player._id !== playerId));
    }
    return (
        <div>
            <table className="table table-dark text-center">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Player Name</th>
                <th scope="col">Preferred Position</th>
                <th scope="col">Bats</th>
                <th scope="col">Throws</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                loaded ?
                allPlayers.map((player, i) =>
                    <tr key={i}>
                        <th scope="row">{player.jerseyNumber}</th>
                        <td><img style={{height: "40px"}} src={guy} alt="Player Photo"/></td>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>{player.bats}</td>
                        <td>{player.throws}</td>
                        <td><DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)}/></td>
                    </tr>
                )
                : ""
            }
            </tbody>
            </table>
        </div>
    )
}

export default PlayersList
