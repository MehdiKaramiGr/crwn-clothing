import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import "./ShopPage.scss";

import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);
  }
  state = { collections: SHOP_DATA };
  render() {
    let { collections } = this.state;
    return (
      <div>
        {collections
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
