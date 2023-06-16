import styles from './ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  console.log(import.meta)
  console.log(import.meta.env)
  console.log(process)
  console.log(process.env)
  return (
    <div className={styles['container']}>
      <h1>adfksljflkj asdfasdf jalksdjfklj фыва</h1>
    </div>
  );
}

export default Ui;
