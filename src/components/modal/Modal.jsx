import { useForm } from 'react-hook-form';
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../input/Input';
import Button from '../button/Button';
import { login } from '../../redux/profileSlice';
import { closeModal } from '../../redux/appSlice';
import { HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Modal = () => {
  const { modalState } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(e) {
    dispatch(login());
    dispatch(closeModal());
    reset();
  }

  if (modalState)
    return (
      <section className={styles.modal}>
        <div>
          <header>
            <p>Login</p>
            <Link to='signup'>Don&apos;t have an account? &nbsp; sign up</Link>
          </header>

          <main>
            <article>
              <h2>Login to apply to jobs</h2>
              <p>
                There is no limit to what you can achieve. Login to start
                applying to jobs now.
              </p>
            </article>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                type='email'
                label='email address'
                id='email'
                register={register}
                error={errors?.email?.message}
              />
              <Input
                type='password'
                label='password'
                id='password'
                register={register}
                error={errors?.password?.message}
              />
              <Button
                type='primary'
                size='medium'
                onClick={() => dispatch(login())}
              >
                Login
              </Button>
            </form>
          </main>

          <span className={styles.close} onClick={() => dispatch(closeModal())}>
            <HiXMark />
          </span>
        </div>
      </section>
    );
};

export default Modal;
