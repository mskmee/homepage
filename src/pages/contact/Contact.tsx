import { useState } from 'react';
import styles from './Contact.module.css';
import { ContactData, ContactQuestion } from '../../components';

const Contact = () => {
  const [isHuman, setIsHuman] = useState(false);
  const onSubmitHandler = () => {
    setIsHuman(true);
  };

  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Fill free to contact me</h1>
      {isHuman ? <ContactData /> : <ContactQuestion onSubmitHandler={onSubmitHandler} />}
    </div>
  );
};
export default Contact;
