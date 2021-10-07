import React from "react";

import { connect } from "react-redux";
import Dropdown from '../components/Dropdown'
import { fetchabilities } from "../actions/fetchAbilities";


    const mapStateToProps = (state) => {
        return {
          res: state.event.res,
          error: state.event.error,
        };
      };
      const mapDispatchProps = (dispatch) => ({
        fetchabilities: (pokemon) => dispatch(fetchabilities(pokemon)),
      });
      
      export default connect(mapStateToProps, mapDispatchProps)(Dropdown);

