export default function checkLuhn(value) {
  value = value.toString().replace(/\D/g, '');

  let nCheck = 0;
  let bEven = false;

  for (let i = value.length - 1; i >= 0; i -= 1) {
    let nDigit = parseInt(value.charAt(i), 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}
