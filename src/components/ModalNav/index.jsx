import styles from './ModalNav.module.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ListStar } from '../../assets/svg/ListStar.svg';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { textFromTopAppearance, widthIncrementAnimation } from '../../utils/animation';
import { personalLinkList } from '../../utils/mapData';

export const ModalNav = ({reference}) => {
  const navigate = useNavigate()
  return (
    <div
      ref={reference.navMenu}
      className={styles.root}
      id="modalNav"
    >
      <span className={styles.cross}>
        <RxCross1 onClick={() => reference.navMenu.current.classList.remove('modalNavActive')}/>
      </span>
      <motion.div
        className={styles.contentContainer}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Logo className={styles.logo}/>
        <nav className={styles.navigation}>
          <li
            className={styles.navigationItem}
          >
            <motion.p
              onClick={() => navigate('training')}
              variants={textFromTopAppearance(0.4)}
            >Обучение
            </motion.p>
          </li>
          <li className={styles.navigationItem}>
            <motion.p
              onClick={() => navigate('services')}
              variants={textFromTopAppearance(0.5)}
            >Услуги
            </motion.p>
          </li>
        </nav>
        <aside className={styles.info}>
          <h6 className={styles.announcement}>
            <motion.span
              variants={textFromTopAppearance(0.6)}
            >
              Вы можете связаться со мной в будние дни с 10:00-20:00
            </motion.span>
          </h6>
          <ul className={styles.connectionList}>
            {
              personalLinkList.map(i => (
                <li className={styles.connectionItem} key={i.text}>
                  <motion.span
                    variants={textFromTopAppearance(i.delay)}
                  >
                    <ListStar/>
                    <a href={i.link} target="_blank" rel="noreferrer">
                      {i.text}
                    </a>
                  </motion.span>
                </li>
              ))
            }
          </ul>
        </aside>
        <motion.div
          className={styles.bottomLine}
          variants={widthIncrementAnimation}
        ></motion.div>
      </motion.div>
    </div>
  )
};
