import { Prefecture } from "../../../types/prefecture";

type CheckboxProps = {
  prefecture: Prefecture;
};

// 一つの都道府県チェックボックス
export const CheckBox: React.FC<CheckboxProps> = ({ prefecture }) => {
  return (
    <div className="checkbox">
      <input
        id={"checkbox" + prefecture.prefCode}
        type="checkbox"
        defaultChecked={false}
      ></input>
      <label>{prefecture.prefName}</label>
    </div>
  );
};
