import styles from './Select.module.scss';

const Select = ({ name, id, value, onValue, children }) => {
  return (
    <select name={name} id={id} value={value} onChange={onValue}>
      {children}
    </select>
  );
};

export default Select;
