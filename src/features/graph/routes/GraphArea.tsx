import Highcharts from "highcharts";
import { PopulationCompositionDict } from "../../../types/population";
import { PrefectureDict, PrefectureIsChecked } from "../../../types/prefecture";
import HighchartsReact from "highcharts-react-official";
import { useChartsOptions } from "../hooks/useChartsOptions";
import { SelectField } from "../components/SelectField";

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
  const { options, handleRadioButtonClick } = useChartsOptions(
    prefectureIsChecked,
    populationCompositionDict,
    prefectureDict,
  );

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <SelectField handleClick={handleRadioButtonClick} />
    </div>
  );
};
