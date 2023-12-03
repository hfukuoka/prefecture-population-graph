import { Prefecture, PrefectureDict } from "../../../types/prefecture";
import { CheckBox } from "../components/Checkbox";

type PrefectureCheckListProps = {
  prefectureDict: PrefectureDict;
};

// 全ての都道府県チェエックボックスを含むエリア
export const PrefectureCheckList: React.FC<PrefectureCheckListProps> = ({
  prefectureDict,
}) => {
  return (
    <div>
      {Object.values(prefectureDict).map((value: Prefecture) => (
        <CheckBox key={value.prefCode} prefecture={value} />
      ))}
    </div>
  );
};
