import { act, render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

// APIキーの入力
describe("api key input", () => {
  test("api key input", async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      "RESAS APIキー",
    ) as HTMLInputElement;
    expect(process.env.REACT_APP_RESAS_API_KEY?.length).toBeGreaterThan(10);
    await act(async () => {
      await user.type(
        inputElement,
        process.env.REACT_APP_RESAS_API_KEY as string,
      );
      await user.tab();
    });
    expect(inputElement.value).toBe(
      process.env.REACT_APP_RESAS_API_KEY as string,
    );
  });
});
