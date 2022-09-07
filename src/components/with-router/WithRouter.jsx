import React from "react";

//React-router-dom
import { useParams, useNavigate, useLocation } from "react-router-dom";

//A HOC to pass down react-router-dom properties into the component for the use of outside the components i.e: redux

function WithRouter(WrappedComponent) {
	function ComponentWithRouterProps(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return (
			<WrappedComponent {...props} route={{ location, navigate, params }} />
		);
	}
	return ComponentWithRouterProps;
}

export default WithRouter;
