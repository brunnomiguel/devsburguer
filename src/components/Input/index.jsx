import { InputContent } from "./style";

const Input = ({ children, ...rest }) => {
  return (
    <InputContent>
      <div>
        <input {...rest} />
      </div>
      {!!children && children}
    </InputContent>
  );
};
export default Input;
