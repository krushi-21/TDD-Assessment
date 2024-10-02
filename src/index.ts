export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.trim()) return 0;

    let delimiter = /[\n,]/;
    let numberPart = numbers;

    // Check if a  delimiter is specified at the beginning of the string
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
      delimiter = new RegExp(`[${customDelimiterMatch[1]}]`); // Use the custom delimiter
      numberPart = numbers.split("\n")[1]; // Extract the numbers part after the custom delimiter
    }

    const numberArray = numberPart.split(delimiter).map((num) => {
      const parsed = parseInt(num, 10);
      return isNaN(parsed) ? 0 : parsed;
    });

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
