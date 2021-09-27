import React from 'react';
import content from '../mock/mock';
import Container from '../container/Container';
import Dropdown from './Dropdown';

// import '../styles/App.css';
// import CountrySelector from './Dropdown';
class Sys extends React.Component {
  render() {
    console.log("rahul");
    return (
      <div>
        {/* <ErrorBoundary> */}
        <Container  Content = {this.props.Content}/>
        {/* </ErrorBoundary> */}
      </div>
    )
  }
}
Sys.defaultProps ={
  Content: content
}
export default Sys;