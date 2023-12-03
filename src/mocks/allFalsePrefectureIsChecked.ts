import { PrefectureIsChecked } from "../types/prefecture";

const getAllFalsePrefectureIsChecked = () => {
  const allFalsePrefectureIsChecked: PrefectureIsChecked = {};

  for (let i = 1; i <= 47; i++) {
    allFalsePrefectureIsChecked[i] = false;
  }
  return allFalsePrefectureIsChecked;
};

export const allFalsePrefectureIsChecked = getAllFalsePrefectureIsChecked();
