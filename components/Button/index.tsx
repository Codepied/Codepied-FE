import styles from './button.module.scss';

interface IButtonStyle {
  width: string;
  height: string;
  background: string;
}

interface IButtonProps extends IButtonStyle {
  children: React.ReactNode | string | number;
  onClick?: () => void;
}

/*
추가로 고려할 스타일:
color,
font-size,
border-color,
&:active, &:hover, &:focus
*/

function Button({
  children,
  onClick = () => {},
  width,
  height,
  background,
}: IButtonProps) {
  return (
    <button
      className={styles.button}
      type="button"
      style={{ width, height, background }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
