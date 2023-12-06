import { PopulationCompositionDict } from "../../../types/population";
import {
  Prefecture,
  PrefectureDict,
  PrefectureIsChecked,
} from "../../../types/prefecture";
import { CheckBox } from "../components/Checkbox";
import { useHandleCheckboxClick } from "../hooks/useHandleCheckboxClick";

type PrefectureCheckListProps = {
  prefectureDict: PrefectureDict;
  setPrefectureIsChecked: React.Dispatch<
    React.SetStateAction<PrefectureIsChecked>
  >;
  populationCompositionDict: PopulationCompositionDict;
  setPopulationCompositionDict: React.Dispatch<
    React.SetStateAction<PopulationCompositionDict>
  >;
};

// 全ての都道府県チェエックボックスを含むエリア
export const PrefectureCheckList: React.FC<PrefectureCheckListProps> = ({
  prefectureDict,
  setPrefectureIsChecked,
  populationCompositionDict,
  setPopulationCompositionDict,
}) => {
  const handleClick = useHandleCheckboxClick(
    setPrefectureIsChecked,
    populationCompositionDict,
    setPopulationCompositionDict,
  );
  return (
    <div className="prefecture-check-list">
      {Object.values(prefectureDict).map((value: Prefecture) => (
        <CheckBox
          key={value.prefCode}
          prefecture={value}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
