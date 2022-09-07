// Copmonents
import CollectionPage from "./Collection.component";

// HOC
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import WithRouter from "../../components/with-router/WithRouter";

// Redux
import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

// Reselect
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
	isLoading: state=> !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner,
	WithRouter
)(CollectionPage);

export default CollectionPageContainer;
