import React from "react";
import { Outlet } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";

import "./ShopPage.scss";

const ShopPage = (props) => {
	return(
	<div>
		<Outlet/>
	</div>
);}

export default ShopPage;
