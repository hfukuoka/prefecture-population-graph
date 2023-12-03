import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

// App全体をレンダリングして結合テスト
// 実際のAPIを用いる
describe("integration test", () => {
  test("title", async () => {
    render(<App />);
    const linkElement = screen.getByText("都道府県人口グラフ");
    expect(linkElement).toBeInTheDocument(); // タイトルが表示されているか
  });

  test("get prefecture", async () => {
    render(<App />);
    await screen.findAllByRole("checkbox");
    expect(screen.getAllByRole("checkbox").length).toBe(47); // 47都道府県あるか
  }, 5000);

  // チェックボックスをクリック、ラジオボタンをクリックして正しくグラフ描画されるか
  test("get population data and show graph", async () => {
    const prefCode = 11; // 埼玉県
    render(<App />);
    await screen.findAllByRole("checkbox");
    await screen.findAllByRole("radio");
    const checkbox = screen.getAllByRole("checkbox")[prefCode - 1];
    const radioButton = screen.getAllByRole("radio")[0];
    userEvent.click(checkbox);
    userEvent.click(radioButton);
    await screen.findAllByText("埼玉県");

    // 1回目のラジオボタンのクリックに関するテスト
    // 非同期処理が終わるまで待ってからテスト
    await waitFor(() => {
      expect(screen.getAllByText("埼玉県").length).toBe(2); // 一覧エリアとグラフエリアで2つ
      expect(screen.getAllByText("総人口").length).toBe(2); // グラフ部分とラジオボタンで2つ
      const firstRadioButton = screen.getAllByRole(
        "radio",
      )[0] as HTMLInputElement;
      const secondRadioButton = screen.getAllByRole(
        "radio",
      )[1] as HTMLInputElement;

      expect(firstRadioButton.checked).toBe(true);
      expect(secondRadioButton.checked).toBe(false);
    });

    const nextRadioButton = screen.getAllByRole("radio")[1];
    userEvent.click(nextRadioButton);

    // 2回目のラジオボタンクリックに関するテスト
    await waitFor(() => {
      expect(screen.getAllByText("年少人口").length).toBe(2); // グラフ部分とラジオボタンで2つ
      const firstRadioButton = screen.getAllByRole(
        "radio",
      )[0] as HTMLInputElement;
      const secondRadioButton = screen.getAllByRole(
        "radio",
      )[1] as HTMLInputElement;
      // 選択した箇所のみtrue
      expect(firstRadioButton.checked).toBe(false);
      expect(secondRadioButton.checked).toBe(true);
    });
  }, 5000);
});
