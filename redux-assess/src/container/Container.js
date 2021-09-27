import React from "react";

import { connect } from "react-redux";
import Dropdown from '../components/Dropdown'
import { getCountries } from "../actions/fetchCountries";


    const mapStateToProps = (state) => {
        return {
          countries: state.event.countries,
          error: state.event.error,
        };
      };
      const mapDispatchProps = (dispatch) => ({
        getCountries: (region) => dispatch(getCountries(region)),
      });
      
      export default connect(mapStateToProps, mapDispatchProps)(Dropdown);

