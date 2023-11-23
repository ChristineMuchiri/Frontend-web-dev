class Thermostat {
  constructor(celcius){
    this.celcius = celcius;
  }
  get temperature() {
    return 5 / 9 * (this.celcius - 32) ; //in celcius
  }
  set temperature(updatedTemp) {
    return this.celcius = (updatedTemp * 9.0 / 5) + 32; // in accepts in celcius
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
