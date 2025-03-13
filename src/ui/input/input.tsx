import './input.scss';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: InputProps) => {
  const { className, ...restProps } = props;
  return <input {...restProps} className={`input ${className}`} />;
};
