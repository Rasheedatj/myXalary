import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../redux/appSlice';
import { HiXMark } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

const Modal = ({ submitFn, children }) => {
  const { modalState } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    submitFn();
    // dispatch(closeModal());
  }

  function handleCloseModal() {
    setSearchParams({});
    dispatch(closeModal());
  }

  if (modalState === true)
    return (
      <section className={styles.modal}>
        <form onSubmit={handleSubmit}>
          {children}

          <span className={styles.close} onClick={handleCloseModal}>
            <HiXMark />
          </span>
        </form>
      </section>
    );
};

export default Modal;
