import React from 'react';

// Convert a string C/F to a number K
const fromCelsius = (t) => t + 273.15;
const fromFahrenheit = (t) => fromCelsius((t - 32) * 5 / 9);

const toKelvin = (input, converter) => {
  const t = parseFloat(input);
  if (Number.isNaN(t)) {
    return undefined;
  }
  return converter(t);
};

//Convert a number K to a string C/F
const toCelsius = (t) => t - 273.15;
const toFahrenheit = (t) => (toCelsius(t) * 9 / 5) + 32;

const fromKelvin = (t, converter) => {
  if (t === undefined) {
    return '';
  }
  const output = Math.round(converter(t) * 1000) / 1000;
  return output.toString();
};

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: undefined}; // Kelvin
  }

  handleCelsiusChange(e) {
    this.setState({temperature: toKelvin(e.target.value, fromCelsius)});
  }

  handleFahrenheitChange(e) {
    this.setState({temperature: toKelvin(e.target.value, fromFahrenheit)});
  }

  render() {
    const temperature = this.state.temperature;
    const celsius = fromKelvin(temperature, toCelsius);
    const fahrenheit = fromKelvin(temperature, toFahrenheit);

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input value={celsius}
                 onChange={this.handleCelsiusChange} />
        </fieldset>
        <fieldset>
          <legend>Enter temperature in Fahrenheit:</legend>
          <input value={fahrenheit}
                 onChange={this.handleFahrenheitChange} />
        </fieldset>
      </div>
    );
  }
}

export default Temperature;
