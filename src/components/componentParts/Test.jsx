import React from 'react';

class Test extends React.Component {
  state = {
    value: 0,
    result: 0,
    fromCurrency: 'BTC',
    toCurrency: 'USD',
    currencies: []
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
      .then(res => res.json())
      .then(data => {
        const currencies = Object.keys(data).map(key => data[key]);
        this.setState({ currencies });
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  convertCurrency = () => {
    const { value, fromCurrency, toCurrency } = this.state;
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${toCurrency}.json`)
      .then(res => res.json())
      .then(data => {
        const rate = data.bpi[toCurrency].rate_float;
        const result = value * rate;
        this.setState({ result });
      });
  }

  render() {
    return (
      <div style={{
        backgroundColor:'plum'
      }}>
        <input type="text" name="value" onChange={this.handleChange} />
        <select name="fromCurrency" onChange={this.handleChange}>
          {this.state.currencies.map(currency => (
            <option key={currency.currency} value={currency.currency}>{currency.currency}</option>
          ))}
        </select>
        <span>to</span>
        <select name="toCurrency" onChange={this.handleChange}>
          {this.state.currencies.map(currency => (
            <option key={currency.currency} value={currency.currency}>{currency.currency}</option>
          ))}
        </select>
        <button onClick={this.convertCurrency}>Convert</button>
        <input type="text" value={this.state.result} readOnly />
      </div>
    );
  }
}

export default Test;