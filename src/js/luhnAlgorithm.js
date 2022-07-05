export default function checkLuhn(numberCardString) {
  let sum = 0;

  for (let i = 0; i < numberCardString.length; i += 1) {
    let cardNumber = parseInt(numberCardString[i], 10);
    if ((numberCardString.length - i) % 2 === 0) {
      cardNumber *= 2;
      if (cardNumber > 9) {
        cardNumber -= 9;
      }
    }
    sum += cardNumber;
  }
  return sum % 10 === 0;
}
