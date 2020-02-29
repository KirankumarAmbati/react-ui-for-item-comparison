import React, { Component } from 'react';
import './App.css';
import data from './data';
import Cards from './components/Cards';
import ComparisonTable from './components/ComparisonTable';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1%;
`

const ErrorMessage = styled.h3`
  color: red;
  text-align: center;
`
class App extends Component {
  constructor() {
    super()
    this.state = {
      selected: []
    }

    this.handleCompare = this.handleCompare.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleCompare(id) {
    let { selected } = this.state;

    selected.push(id);

    this.setState({
      selected
    })
  }
  handleRemove(id) {
    let { selected } = this.state;

    selected.splice(selected.indexOf(id), 1);

    this.setState({
      selected
    })
  }
  render() {
    return (
      <Container>
        <div style={{ display: 'flex' }}>
          <Cards selected={this.state.selected} data={data} handleCompare={this.handleCompare} handleRemove={this.handleRemove}/>
        </div>
        {this.state.selected.length === 1 && <ErrorMessage>* Please select one more to compare</ErrorMessage>}
        {this.state.selected.length > 1 && <ComparisonTable data={data} selected={this.state.selected} />}
      </Container>
    );
  }
}

export default App;