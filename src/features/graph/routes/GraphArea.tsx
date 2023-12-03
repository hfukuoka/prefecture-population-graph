import Highcharts from "highcharts";
import { PopulationCompositionDict } from "../../../types/population";
import { PrefectureDict, PrefectureIsChecked } from "../../../types/prefecture";
import HighchartsReact from "highcharts-react-official";
import { useChartsOptions } from "../hooks/useChartsOptions";

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
  const { options } = useChartsOptions(
    prefectureIsChecked,
    populationCompositionDict,
    prefectureDict,
  );

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
