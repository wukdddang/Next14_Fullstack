import { INewInputProps, NewInputClass } from "./input";

interface IChildInputProps extends INewInputProps {}

class childInput extends NewInputClass {
  newFunction = () => {
    console.log("New Function");
  };

  constructor() {
    super();
    this.title = "Child Title";
    this.placeholder = "Child Placeholder";
    this.submit = this.newFunction;
  }
}

const childInputInstance = new childInput();

export function ChildInput() {
  return (
    <div>
      <label>{childInputInstance.title}</label>
      <input
        type={childInputInstance.type}
        placeholder={childInputInstance.placeholder}
      />
      <button onClick={childInputInstance.submit}>Submit</button>
    </div>
  );
}
