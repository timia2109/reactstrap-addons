import React, { Component } from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

import { SuggestionInputTest } from './components/SuggestionInput/SuggestionInputTest';
import { LoadingAlert } from './reactComponentLib';
import { Container } from 'reactstrap';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

class App extends Component {
    render() {
        return (
            <Container>
                <div>
                    <SuggestionInputTest />
                    <br />
                    <LoadingAlert />
                </div>
            </Container>
        );
    }
}

export default App;
