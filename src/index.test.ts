import { StringCalculator } from "./index";

const calculator = new StringCalculator();
describe("String Calculator", () => {
  //step 1-2 test cases
  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return the number itself if only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  it("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

  //step-3 test cases
  it("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it("should handle multiple new lines and commas between numbers", () => {
    expect(calculator.add("1\n2\n3,4")).toBe(10);
  });

  it("should handle only new lines between numbers", () => {
    expect(calculator.add("1\n2\n3")).toBe(6);
  });

  it("should return 0 for a string with only new lines and no numbers", () => {
    expect(calculator.add("\n\n")).toBe(0);
  });

  //new test cases for step-4

  it("should handle custom delimiter ';'", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  it("should handle custom delimiter '|'", () => {
    expect(calculator.add("//|\n1|2|3")).toBe(6);
  });

  it("should handle custom delimiter '*' and return sum", () => {
    expect(calculator.add("//*\n4*5*6")).toBe(15);
  });

  it("should handle a custom delimiter ',' when explicitly specified", () => {
    expect(calculator.add("//,\n7,8,9")).toBe(24);
  });

  it("should handle a complex custom delimiter '%' and return sum", () => {
    expect(calculator.add("//%\n1%2%3")).toBe(6);
  });
});
