function validatePIN (pin) {
  const pinLength = pin.length;
  if ( pinLength !== 4 && pinLength !== 6){
    return false;
  }
  const regex = new RegExp(/^[0-9]+$/);
  return regex.test(pin);
}
