import Highcharts from "highcharts";
import { PopulationCompositionDict } from "../../../types/population";
import { PrefectureDict, PrefectureIsChecked } from "../../../types/prefecture";
import HighchartsReact from "highcharts-react-official";

type GraphAreaProps = {
  prefectureIsChecked: PrefectureIsChecked;
  populationCompositionDict: PopulationCompositionDict;
  prefectureDict: PrefectureDict;
};

// グラフのエリアのコンポーネント
export const GraphArea: React.FC<GraphAreaProps> = ({
  prefectureIsChecked,
  populationCompositionDict,
  prefectureDict,
}) => {
  const categories: string[] = ["1980", "1985", "1990"];
  const series: Highcharts.SeriesOptionsType[] = [
    { type: "line", name: "北海道", data: [2906, 2769, 2346] },
  ];

  // グラフ用オプション
  const options: Highcharts.Options = {
    title: {
      text: "総人口",
    },
    xAxis: {
      title: {
        text: "年",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人",
      },
    },
    series: series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
