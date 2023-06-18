import styles from './ContactQuestion.module.css';
import marvinImg from '../../assets/img//marvin.jpg';
import { Button } from '../../components/ui/button/Button';
import { ChangeEvent, useState } from 'react';
import { ImgLoader } from '..';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations';

interface ContactQuestionProps {
  onSubmitHandler: () => void;
}

export const ContactQuestion = ({ onSubmitHandler }: ContactQuestionProps) => {
  const [isTip, setIsTip] = useState(false);
  const [inputData, setInputData] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleTipClick = () => {
    setIsTip((prev) => !prev);
  };

  const onFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputData !== '42') {
      return setIsError(true);
    }
    setIsError(false);
    onSubmitHandler();
  };
  return (
    <motion.form
      variants={pageAnimation}
      id="contact-question"
      onSubmit={onFormSubmit}
      className={styles.form}
    >
      <ImgLoader className={styles.img} alt="about me image" src={marvinImg} />
      <label className={styles.question} htmlFor="answer">
        Please confirm that you are not a robot. Enter the answer to the ultimate question of life,
        the universe, and everything.
      </label>
      <input
        className={styles.input}
        id="answer"
        value={inputData}
        onChange={handleInputDataChange}
        type="text"
      />
      {isError && <p className={styles.error}>Oops, wrong answer</p>}
      <Button className={styles.btn} type="submit">
        Submit
      </Button>
      <Button onClick={handleTipClick} className={styles.btn} type="button">
        Give me a tip
      </Button>
      {isTip && <p className={styles.tip}>Errors often help to find the correct answer.</p>}
    </motion.form>
  );
};
