import Button from '../button/Button';
import styles from './ErrorFallback.module.scss';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert' className={styles.error}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button size='medium' type='secondary' onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
