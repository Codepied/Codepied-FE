interface IInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function LoginInput({ value, onChange }: IInputProps) {
  return <input value={value} onChange={onChange} />;
}

export default LoginInput;
