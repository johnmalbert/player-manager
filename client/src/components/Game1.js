import React from 'react'

const Game1 = props => {
    const { loaded, allPlayers, updateStatus } = props;

    const clickHandler = (player,index,setStatus) => {
        updateStatus(player,index,setStatus);
    }
    return (
        <div>
            <table className="table table-dark">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Player Name</th>
                <th scope="col">Position</th>
                <th scope="col">Status</th>
                <th scope="col">Change Status</th>
                </tr>
            </thead>
            <tbody>
            {
                loaded ?
                allPlayers.map((player, i) =>
                    <tr key={i}>
                        <th scope="row">{player.jerseyNumber}</th>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        { player.active ? 
                            <div>
                            {
                                player.active[0] === 0 ? 
                                <td>Unassigned</td> : 
                                player.active[0] === 1 ?
                                <td>Starting</td> : 
                                player.active[0] === 2 ?
                                <td>Benched</td> : "" 
                            }
                            </div>
                            : console.log(player)
                        }               
                        <td>
                            <button className="btn btn-success" onClick={() => clickHandler(player, 0, 1)}>Start</button> | 
                            <button className="btn btn-danger" onClick={() => clickHandler(player, 0, 2)}>Bench</button> | 
                            <button className="btn btn-warning" onClick={() => clickHandler(player, 0, 0)}>Unassign</button>
                        </td>
                    </tr>
                )
                : ""
            }
            </tbody>
            </table>

        </div>
    )
}

export default Game1
