export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.trim()) return 0;

    const numberArray = numbers.split(",").map((num) => {
      const parsed = parseInt(num, 10);
      return isNaN(parsed) ? 0 : parsed;
    });

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

// console.log(add(""));
// console.log(add("1"));
// console.log(add("1,5"));
