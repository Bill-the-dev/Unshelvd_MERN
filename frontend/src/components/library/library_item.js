import React from "react";
import { Link } from "react-router-dom";


class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  render(){
    // debugger
    const { currentUser, game } = this.props;
    return(
      <div>
        {/* <li className="library-item" onClick={() => openModal(game.id)}> */}
        <Link to={`/library/games/${game._id}`}>
          <li className="library-index-item">

            <img src={game.image} alt={game.image} id="game-img--library" />
              <h1 id={game.image === "https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/z-images/game-piece-1.png?raw=true" ? "game-title--user-created" : "game-title--library"}>{game.name}</h1>
            {/* <Link to={`/library/games/${game._id}`} id="game-title--library">{game.name}</Link>
           */}
          </li>
        </Link>
      </div>
    )
  }

}


export default ProductIndexItem;