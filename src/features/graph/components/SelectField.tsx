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
    <div className="select-field">
      {labelList.map((label) => {
        return (
          <div key={label} className="radio-button-container">
            <input
              type="radio"
              name="label"
              id={label}
              onClick={() => {
                handleClick(label);
              }}
            />
            <label>{label}</label>
          </div>
        );
      })}
    </div>
  );
};
