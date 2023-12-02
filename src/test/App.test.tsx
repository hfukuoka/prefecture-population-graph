import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

// App全体をレンダリングして結合テスト
// 実際のAPIを用いる
describe("integration test", () => {
  test("title", async () => {
    render(<App />);
    const linkElement = screen.getByText("都道府県人口グラフ");
    expect(linkElement).toBeInTheDocument(); // タイトルが表示されているか
  });

  test("get prefecture", async () => {
    const { getAllByRole } = render(<App />);
    await waitFor(() => getAllByRole("checkbox"));
    const checkboxs = getAllByRole("checkbox");
    expect(checkboxs.length).toBe(47); // 47都道府県あるか
  });
});
