import axios from "axios";

// APIのリクエストのみを行い、キーの設定等が正常にできているか確認

test("resas api request", async () => {
  const res = await axios.get(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
    {
      params: { cityCode: "-", prefCode: "1" },
      headers: {
        "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
      },
    },
  );
  const { data } = res;
  const populations = data.result.data[0].data;
  expect(populations.length).toBeGreaterThan(10);
});
