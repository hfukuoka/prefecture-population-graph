export interface YearPopulation {
  year: number;
  value: number;
  rate?: number;
}

export type PopulationLabel =
  | "総人口"
  | "年少人口"
  | "生産年齢人口"
  | "老年人口";

export interface PopulationComposition {
  boundaryYear: number;
  data: {
    label: PopulationLabel;
    data: YearPopulation[];
  }[];
}

export interface PopulationCompositionResponse {
  message: string | null;
  result: PopulationComposition;
}

export interface PopulationCompositionDict {
  [prefCode: number]: PopulationComposition;
}
