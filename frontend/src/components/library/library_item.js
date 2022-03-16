import React from "react";
import { Link } from "react-router-dom";


class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  render(){
    return(
      <div>
        {/* <li className="library-item" onClick={() => openModal(game.id)}> */}
        <li>
          <h1>Test Library Item</h1>

        </li>
      </div>
    )
  }

}


export default ProductIndexItem;