import { IInputProps } from "./iprops";

export function Input(props: IInputProps) {
  return (
    <div>
      <label>{props.title}</label>
      <input type={props.type} />
    </div>
  );
}
