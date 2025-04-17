import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import Status from '../status/Status';
import { HiOutlineX, HiXCircle } from 'react-icons/hi';

const ModalContext = createContext({
  handleCloseModal: () => {},
  handleOpenModal: () => {},
  openModal: '',
});

const Modal = ({ children }) => {
  const [openModal, setModal] = useState('');
  const handleOpenModal = setModal;
  const handleCloseModal = () => setModal('');

  useEffect(() => {
    if (openModal !== '') {
      document.body.style.overflow = 'hidden';
    }
  }, [openModal]);

  return (
    <ModalContext.Provider
      value={{ handleCloseModal, handleOpenModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, modalName, handleFnc }) => {
  const { handleOpenModal } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      handleFnc?.();
      handleOpenModal(modalName);
    },
  });
};

const Close = ({ children, handleFnc }) => {
  const { handleCloseModal } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      handleFnc?.();
      handleCloseModal();
    },
  });
};

const Header = ({ children }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <header>
      <p>{openModal}</p>

      {children}
    </header>
  );
};

const Window = ({ modalName, children }) => {
  const { openModal, handleCloseModal } = useContext(ModalContext);
  const ref = useOutsideClick(handleCloseModal);

  if (openModal !== modalName) return;

  return createPortal(
    <section className={styles.overlay}>
      <section ref={ref} className={styles.modal}>
        <div className={styles.close} onClick={handleCloseModal}>
          <HiOutlineX size={24} />
        </div>
        <section className={styles.main}>{children}</section>
      </section>
    </section>,
    document.body
  );
};

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;
Modal.Header = Header;

export default Modal;
