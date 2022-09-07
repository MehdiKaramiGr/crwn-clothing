// Copmonents
import CollectionOverview from "./CollectionOverview.component";

// HOC
import WithSpinner from "../with-spinner/WithSpinner.component";

// Redux
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";


const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer