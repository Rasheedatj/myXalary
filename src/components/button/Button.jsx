import styles from './Button.module.scss';

const Button = ({ children, onClick, type, size }) => {
  return (
    <button
      className={`${styles[`${type}Btn`]} ${styles[`${size}Btn`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
