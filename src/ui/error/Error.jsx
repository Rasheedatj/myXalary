import { useRouteError } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = () => {
  const error = useRouteError();
  return (
    <article>
      <h1>Something went wrong... </h1>
      <p>{error.data || error.message}</p>
    </article>
  );
};

export default Error;
