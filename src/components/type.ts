export type DragItem = {
  id: number;
  type: Item;
  content?: JSX.Element;
};
export type Item = "INPUT" | "RADIO" | "SELECT" | "TEXTAREA";
export interface FormValueTypes {
  namefield?: string;
  message?: string;
  radio?: string;
  select?: string;
}
