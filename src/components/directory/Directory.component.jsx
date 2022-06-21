import React from "react";

// Styled Components
import {DirectoryMenuContainer} from './Directory.styles'

// Components
import MenuItem from "../menu-item/MenuItem.component";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";


const Directory = ({ sections }) => (
	<DirectoryMenuContainer>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps}></MenuItem>
		))}
	</DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
