import { IInputProps } from "../iprops";

export interface INewInputProps extends IInputProps {
  placeholder: string;
  submit: Function;
}

export class NewInputClass implements INewInputProps {
  constructor() {}

  public type: string = "text";
  public title: string = "Title";
  public placeholder: string = "Placeholder";
  public submit: () => void = () => console.log("Submit");
}

const newInput = new NewInputClass();

export function NewInput() {
  return (
    <div>
      <label>{newInput.title}</label>
      <input type={newInput.type} placeholder={newInput.placeholder} />
      <button onClick={newInput.submit}>Submit</button>
    </div>
  );
}
