import { StringCalculator } from "./index";

const calculator = new StringCalculator();
describe("String Calculator", () => {
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
});
