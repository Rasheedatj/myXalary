import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../redux/appSlice';
import { HiXMark } from 'react-icons/hi2';

const Modal = ({ submitFn, children }) => {
  const dispatch = useDispatch();

  function handleSubmit() {
    submitFn();
    dispatch(closeModal());
  }

  return (
    <section className={styles.modal}>
      <form onSubmit={handleSubmit}>
        {children}

        <span className={styles.close} onClick={() => dispatch(closeModal())}>
          <HiXMark />
        </span>
      </form>
    </section>
  );
};

export default Modal;
