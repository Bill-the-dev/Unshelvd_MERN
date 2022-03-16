import React from "react";
import { Link } from "react-router-dom";
// import GameShow from "../game/game_show";

class GroupShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div>
                <h1>Group Name</h1>
                <h1>Group Users List</h1>
                <button>Group Suggest</button>
                <ul className="group-games-index">
                    <li>Test</li>
                    {/* {
                    games.map(game => 
                    <GameIndexItem openModal={openModal} game={game} key={game.id}/>)
                    } */}
                </ul>
            </div>
        )
    }

}

export default GroupShow;