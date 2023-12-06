import { PopulationLabel } from "../../../types/population";

type SelectFieldProps = {
  handleClick: (label: PopulationLabel) => void;
};

export const SelectField: React.FC<SelectFieldProps> = ({ handleClick }) => {
  const labelList: PopulationLabel[] = [
    "総人口",
    "年少人口",
    "生産年齢人口",
    "老年人口",
  ];
  return (
    <div className="select-field-container">
      <div className="select-field">
        {labelList.map((label) => {
          return (
            <label key={label} className="control control-radio">
              {label}
              <input
                type="radio"
                name="label"
                id={label}
                onClick={() => {
                  handleClick(label);
                }}
              />
              <div className="control-indicator"></div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
