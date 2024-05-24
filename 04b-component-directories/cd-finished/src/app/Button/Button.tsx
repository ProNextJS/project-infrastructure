import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
}

export default function Button({ label, children, ...props }: ButtonProps) {
  return (
    <button type="button" className={styles.btn} {...props}>
      {label || children}
    </button>
  );
}
