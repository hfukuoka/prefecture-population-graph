import { act, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

// App全体をレンダリングして結合テスト
// 実際のAPIを用いる
describe("integration test", () => {
  // APIキーの入力
  beforeEach(async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      "RESAS APIキー",
    ) as HTMLInputElement;
    await act(async () => {
      await user.type(
        inputElement,
        process.env.REACT_APP_RESAS_API_KEY as string,
      );
      await user.tab();
    });
    const buttonElement = screen.getByText("利用開始");
    await act(async () => {
      await user.click(buttonElement);
      await user.tab();
    });
  });

  // タイトルが表示されているか
  test("title", async () => {
    const linkElement = screen.getByText("都道府県人口グラフ");
    expect(linkElement).toBeInTheDocument(); // タイトルが表示されているか
  });

  // 都道府県一覧が取得できているか
  test("get prefecture", async () => {
    await screen.findAllByRole("checkbox");
    expect(screen.getAllByRole("checkbox").length).toBe(47); // 47都道府県あるか
  }, 5000);

  // チェックボックスをクリック、ラジオボタンをクリックして正しくグラフ描画されるか
  test("get population data and show graph", async () => {
    const prefCode = 11; // 埼玉県
    await screen.findAllByRole("checkbox");
    await screen.findAllByRole("radio");
    const checkbox = screen.getAllByRole("checkbox")[prefCode - 1];
    const radioButton = screen.getAllByRole("radio")[0];
    await act(async () => {
      await user.click(checkbox);
      await user.click(radioButton);
    });

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
    await act(async () => {
      user.click(nextRadioButton);
    });

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
