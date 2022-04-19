import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e){
    this.setState({
      [e.target.name] : Number(e.target.value)
    })
  };

  calculateChange(){
    let currency = [
      {'twenty': 20},
      {'ten': 10},
      {'five': 5},
      {'one': 1},
      {'quarters': 0.25},
      {'dimes': 0.10},
      {'nickels': 0.05},
      {'pennies':0.01}
    ]

    let due = this.state.amountDue;
    let received = this.state.amountReceived;
    let change = (received - due).toFixed(2);

      this.setState({
        total: change
      })

    currency.map(curr=>{
      change = Math.abs(change)
      let key = `${(Object.keys(curr)).toString()}-output`
      let value = Number(Object.values(curr))
      let output = ~~(change/value)
      change = (change - (value*output)).toFixed(2)
      document.getElementById(key).textContent = output;
    })
  }

  render() {
    let total = this.state.total
    return(
      <div className="container">
        <div className="pb-2 mt-4 mb-2 border-bottom text-white">
          <h1>Change Calculator</h1>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body d-flex flex-column">
                <label className="fw-bold" htmlFor="amount-due">How much is due?</label>
                <input className="my-2" type="number" name="amountDue" id="amount-due" defaultValue={this.state.amountDue} onChange={this.handleChange}></input>
                <label className="fw-bold" htmlFor="amount-received">How much was received?</label>
                <input className="my-2" type="number" name="amountReceived" id="amount-received" defaultValue={this.state.amountReceived} onChange={this.handleChange}></input>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary w-100" onClick={() => this.calculateChange(Math.abs(this.state.total))}>Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body text-center">
                  {total == 0 ? <div></div> : total > 0 ?
                  <div className="alert alert-success p-3" id="total-change">{`The total change due is $${this.state.total}`}</div> :
                  <div className="alert alert-danger p-3" id="total-due">{`The total amount still owed is $${Math.abs(this.state.total)}`}</div>}
                <div className="row">
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Twenties</h5>
                    <h5 className="change text-muted" id="twenty-output">0</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Tens</h5>
                    <h5 className="change text-muted" id="ten-output">0</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Fives</h5>
                    <h5 className="change text-muted" id="five-output">0</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Ones</h5>
                    <h5 className="change text-muted" id="one-output">0</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Quarters</h5>
                    <h5 className="change text-muted" id="quarters-output">0</h5>
                  </div>
                  <div className="m-3 p-4  col bg-light border border-3 rounded">
                    <h5>Dimes</h5>
                    <h5 className="change text-muted" id="dimes-output">0</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Nickels</h5>
                    <h5 className="change text-muted" id="nickels-output">0</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Pennies</h5>
                    <h5 className="change text-muted" id="pennies-output">0</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    )
  }
}

export default App;
