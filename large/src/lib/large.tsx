import styles from './large.module.scss';

/* eslint-disable-next-line */
export interface LargeProps {}

export function Large(props: LargeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Large!</h1>
    </div>
  );
}

export default Large;
