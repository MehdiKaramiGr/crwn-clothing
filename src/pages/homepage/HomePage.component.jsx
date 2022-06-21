import React from "react";

// Styled Components
import {HomePageContainer} from './HomePage.styles'

// Components
import Directory from "../../components/directory/Directory.component";


const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;