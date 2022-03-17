import React from "react";
import { Link } from "react-router-dom";


class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  render(){
    const { currentUser, game } = this.props;
    return(
      <div>
        {/* <li className="library-item" onClick={() => openModal(game.id)}> */}
        <Link to={`/library/games/${game._id}`}><li className="library-index-item">

          <img src={game.image} alt={game.image} id="game-img--library" />
          <h1 id="game-title--library">{game.name}</h1>
          {/* <Link to={`/library/games/${game._id}`} id="game-title--library">{game.name}</Link>
           */}
        </li></Link>
      </div>
    )
  }

}


export default ProductIndexItem;