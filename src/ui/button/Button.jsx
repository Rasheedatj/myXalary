import styles from './Button.module.scss';

const Button = ({ children, onClick, type }) => {
  return (
    <button className={`${styles[`${type}Btn`]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
