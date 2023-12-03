import { allFalsePrefectureIsChecked } from "../../mocks/allFalsePrefectureIsChecked";
import { populationCompositionDict11Only } from "../../mocks/populationCompositionDict11Only";
import { PopulationLabel } from "../../types/population";
import { PrefectureIsChecked } from "../../types/prefecture";
import prefectureDict from "../../mocks/prefectureDict";
import { Options, SeriesOptionsType, XAxisOptions } from "highcharts";
import { makeHighChartsOptions } from "../../features/graph/utils/makehighChartsOptions";

// モックデータを用いてoptionsが正しく作成されるかテスト
describe("graph utils", () => {
  test("makeHighChartsOptions", () => {
    const label: PopulationLabel = "総人口";
    const prefectureIsChecked11Only: PrefectureIsChecked =
      allFalsePrefectureIsChecked;
    prefectureIsChecked11Only[11] = true;

    const res: Options = makeHighChartsOptions(
      label,
      prefectureIsChecked11Only,
      populationCompositionDict11Only,
      prefectureDict,
    );
    expect(res).toHaveProperty("title");
    expect(res).toHaveProperty("xAxis");
    expect(res).toHaveProperty("yAxis");
    expect(res).toHaveProperty("series");
    expect(res.xAxis).toHaveProperty("title");
    expect(res.xAxis).toHaveProperty("categories");
    const xAxis: XAxisOptions = res.xAxis as XAxisOptions;
    if (xAxis.categories) expect(xAxis.categories.length).toBeGreaterThan(0);
    const series: SeriesOptionsType[] | undefined = res.series;
    expect(series?.length).toBe(1); // prefCode11（埼玉）だけ
    if (series) expect(series[0]).toHaveProperty("data");
    if (series && "data" in series[0] && series[0].data)
      expect(series[0].data.length).toBeGreaterThan(13); // 現在14年分のデータがある
    if (series) expect(series[0].name).toBe("埼玉県"); // prefCode11は埼玉
  });
});
