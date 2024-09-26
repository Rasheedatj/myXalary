import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Modal from '../modal/Modal';
import Input from '../input/Input';
import Button from '../button/Button';
import Status from '../status/Status';
import { handleLogin } from '../../redux/appSlice';

const SignUp = () => {
  const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  const onSubmit = () => {
    reset();
  };

  return (
    <Modal submitFn={handleSubmit(onSubmit)}>
      <header>
        <p>SignUp</p>

        <Status type='pinkSecondary' onClick={() => dispatch(handleLogin())}>
          Already have an account? &nbsp; login
        </Status>
      </header>

      <main>
        <article>
          <h2>Signup to apply to jobs</h2>
          <p>
            We need certain one time information which will make the employer
            able to evaluate your CV. It will make it easier for us to send your
            profile to employers and for employers to have a thorough review of
            your profile.
          </p>
        </article>

        <div>
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
          <Input
            type='password'
            label='Confirm Password'
            id='confirmPassword'
            register={register}
            error={errors?.confirmPassworf?.message}
          />
          <Button type='secondary' size='medium'>
            Signup
          </Button>
        </div>
      </main>
    </Modal>
  );
};

export default SignUp;
