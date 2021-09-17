import React from 'react';
import content from '../mock/mock';
import Dropdown from './Dropdown';
// import '../styles/App.css';
// import CountrySelector from './Dropdown';
class Sys extends React.Component {
  render() {
    return (
      <div>
        <Dropdown  Content = {this.props.Content}/>
      </div>
    )
  }
}
Sys.defaultProps ={
  Content: content
}
export default Sys;