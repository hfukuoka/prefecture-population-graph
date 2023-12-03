export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PrefecturesResponse {
  message: string | null;
  result: Prefecture[];
}

export interface PrefectureDict {
  [prefCode: number]: Prefecture;
}

// 都道府県一覧レスポンスから都道府県一覧辞書への変換
export const prefResponseToDict = (
  input: PrefecturesResponse,
): PrefectureDict => {
  const output: PrefectureDict = {};
  const { result: prefectures } = input;
  prefectures.forEach((prefecture) => {
    output[prefecture.prefCode] = prefecture;
  });
  return output;
};

export interface PrefectureIsChecked {
  [prefCode: number]: boolean;
}

// 都道府県一覧辞書から都道府県チェック管理変数の作成（全てfalseで未チェック）
export const makePrefectureIsChecked = (
  input: PrefectureDict,
): PrefectureIsChecked => {
  const output: PrefectureIsChecked = {};
  for (const key in input) {
    output[key] = false;
  }
  return output;
};
