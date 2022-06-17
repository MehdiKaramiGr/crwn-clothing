import React from "react";

import CollectionItem from "../../components/collection-item/CollectionItem";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./Collection.scss";

const CollectionPage = () => {
	let { collectionID } = useParams();
	const collection = useSelector((state) =>
		selectCollection(collectionID)(state)
	);
	const {title , items} = collection
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item=> <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPage;
