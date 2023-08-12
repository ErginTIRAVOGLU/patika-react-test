import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;
  beforeEach(() => {
   console.log("Her testten önce");   
  });
  afterEach(() => {
    console.log("Her testten sonra");   
   });

  beforeAll(() => {
    console.log("Başta bir kere");   
   });
   afterAll(() => {
    console.log("Sonda bir kere");   
   });

  test("increase btn", () => {
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Arttır");
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    render(<Counter />);
    count = screen.getByText("0");
    decreaseBtn = screen.getByText("Azalt");
    fireEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
