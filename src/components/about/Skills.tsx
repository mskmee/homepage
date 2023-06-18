import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2 className={styles.sub_title}>Skills:</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>HTML, CSS, SASS</li>
        <li className={styles.list_item}>Git, GitHub</li>
        <li className={styles.list_item}>JavaScript, TypeScript</li>
        <li className={styles.list_item}>React</li>
      </ul>
    </div>
  );
};
