export class StringCalculator {
  add(numbers) {
    if (!numbers.trim()) return 0;

    let delimiter = /[\n,]/; // Default delimiters are new lines and commas
    let numberPart = numbers;

    // Check if a custom delimiter is specified at the beginning of the string
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
      delimiter = new RegExp(`[${customDelimiterMatch[1]}]`); // Use the custom delimiter
      numberPart = numbers.split("\n")[1]; // Extract the numbers part after the custom delimiter
    }

    // Split the numbers by the determined delimiter and parse them into integers
    const numberArray = numberPart.split(delimiter).map((num) => {
      const parsed = parseInt(num, 10);
      return isNaN(parsed) ? 0 : parsed; // Convert to 0 if NaN
    });

    // Check for negative numbers
    const negativeNumbers = numberArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    // Return the sum of the numbers
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
