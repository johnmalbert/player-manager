import React from 'react'

const PlayersList = props => {
    const { allPlayers, loaded } = props;
    
    return (
        <div>
            <table class="table table-dark">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Player Name</th>
                <th scope="col">Preferred Position</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                loaded ?
                allPlayers.map((player, i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td><button className="btn btn-danger">Delete Player</button></td>
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
