import React from "react";
import { Link } from "react-router-dom";
import GroupIndexItem from "../game/game_show";

class GroupIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Your Groups</h1>
                <ul className="group-games-index">
                    {
                        groups.map(group =>
                            <GroupIndexItem key={group.id} />)  ///this is group show???! No such GroupIndexItem?
                    }
                </ul>
            </div>
        );
    }

}

export default GroupIndex;