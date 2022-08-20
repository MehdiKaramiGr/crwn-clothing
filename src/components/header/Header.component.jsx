import {React , useState} from "react";

// Styled Components
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink,
} from "./Header.styles";

// Components
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// Firebase/Auth
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => {
	const [headerVisibility , setHeaderVisibility]=useState(false)
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">
					SHOP
				</OptionLink>
				<OptionLink to="/shop">
					CONTACT
				</OptionLink>
				{currentUser ? (
					<OptionDiv onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionDiv>
				) : (
					<OptionLink to="/signin">
						SIGN IN
					</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
