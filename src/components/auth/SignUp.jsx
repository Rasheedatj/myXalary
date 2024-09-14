import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

const SignUp = () => {
  return (
    <Modal>
      <header>
        <p>Login</p>

        <Link>Don&apos;t have an account? &nbsp; sign up</Link>
      </header>
    </Modal>
  );
};

export default SignUp;
