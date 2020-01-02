import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'reactstrap';
import { ComponentInfos } from './ComponentInfos';
import { ComponentInfo } from './components/ComponentInfo/ComponentInfo';

class App extends Component {
    render() {
        return (
            <Container>
                <h1>reactstrap addons</h1>
                {
                    ComponentInfos.map(i => <ComponentInfo info={i} />)
                }
            </Container>
        );
    }
}

export default App;
