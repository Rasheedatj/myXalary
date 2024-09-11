import styles from './Input.module.scss';

const Input = ({ type, id, name, value, onValue, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
