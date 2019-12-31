import React, { Component } from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

import { SuggestionInputTest } from './components/SuggestionInput/SuggestionInputTest';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <div>
        <SuggestionInputTest />
      </div>
    );
  }
}

export default App;
