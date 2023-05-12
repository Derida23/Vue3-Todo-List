export interface ISchedule {
  id: number;
  category: string;
  item: string;
  completed: boolean;
  date: string;
}

export interface ITab {
  key: string | number;
  label: string;
}

export interface ISelect {
  label: string;
  value: string;
}
