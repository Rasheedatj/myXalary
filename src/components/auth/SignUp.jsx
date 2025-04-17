import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';
import Status from '../status/Status';

const SignUp = () => {
  const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;

  const onsubmit = () => {
    reset();
  };

  return (
    <Modal.Window modalName='Sign up'>
      <Modal.Header>
        <Modal.Open modalName='Login'>
          <Status type='pinkSecondary'>
            Already have an account? &nbsp; Login
          </Status>
        </Modal.Open>
      </Modal.Header>
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

        <form onSubmit={handleSubmit(onsubmit)}>
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

          <Modal.Close>
            <Button type='secondary' size='medium'>
              Signup
            </Button>
          </Modal.Close>
        </form>
      </main>
    </Modal.Window>
  );
};

export default SignUp;
