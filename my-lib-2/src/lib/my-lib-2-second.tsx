import styles from './my-lib-2.module.scss';

/* eslint-disable-next-line */
export interface MyLib2SecondProps {}

export function MyLib2Second(props: MyLib2SecondProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib2Second! 5</h1>
    </div>
  );
}

export default MyLib2Second;
