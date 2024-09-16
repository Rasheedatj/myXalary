import styles from './Input.module.scss';

const Input = ({
  label,
  type,
  id,
  register,
  placeholder,
  disabled,
  error,
  required,
}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {label && <span>{label}</span>}

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id, {
          required: {
            value: !disabled,
            message: 'This filed is required',
          },
        })}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};

export default Input;
