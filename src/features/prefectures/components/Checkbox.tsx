import { Prefecture } from "../../../types/prefecture";

type CheckboxProps = {
  prefecture: Prefecture;
  handleClick: (prefecture: Prefecture) => void;
};

// 一つの都道府県チェックボックス
export const CheckBox: React.FC<CheckboxProps> = ({
  prefecture,
  handleClick,
}) => {
  return (
    <div className="control control-checkbox">
      <label>
        {prefecture.prefName}
        <input
          id={"checkbox" + prefecture.prefCode}
          type="checkbox"
          defaultChecked={false}
          onClick={() => handleClick(prefecture)}
        />
        <div className="control-indicator" />
      </label>
    </div>
  );
};
