import React from "react";

// Styled Components
import {
	CollectionItemContainer,
	AddButton,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
} from "./CollectionItem.styles";

// Redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";



const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<BackgroundImage
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<CollectionFooterContainer>
				<NameContainer >{name}</NameContainer>
				<PriceContainer>${price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton inverted onClick={() => addItem(item)}>
				ADD TO CART
			</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
