import styles from './DropDownItem.module.css';
import { useRef, useState } from 'react';
import { Slider, CustomButton } from '../../components'
import { ReactComponent as ListStar } from '../../assets/img/ListStar.svg';

export const DropDownItem = ({ title, content, price }) => {
  const contentRef = useRef(null);
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`);
  }
  return (
    <>
      <h3 className={`${styles.title} ${setActive}`} style={{...(setActive && {borderColor: '#FFA52D'}) }} onClick={toggleAccordion}>
        {title}
      </h3>
      <div className={styles.contentContainer} ref={contentRef} style={{ maxHeight: `${setHeight}`,}}>
        <article className={styles.textContainer}>
          <div className={styles.mainText} dangerouslySetInnerHTML={{ __html: content.mainText }}/>
          {
            content.forWhoList &&
            <ul className={styles.approachList}>
              <p>Для кого эта процедура:</p>
              {
                content.forWhoList.map(i => (
                  <li key={i.id} className={styles.approachItem}>
                    <ListStar className={styles.listStar}/>
                    <p>{i.text}</p>
                  </li>
                ))
              }
            </ul>
          }
          {
            content.sliderImgList &&
            <div className={styles.sliderContainer}>
              <Slider data={content.sliderImgList}/>
            </div>
          }
          <div className={styles.bottomContent}>
            {
              price &&
              <p>
                Цена: { price }	&#8364;
              </p>
            }
            <aside className={styles.btnContainer}>
              <CustomButton inStyle="link" text="Записаться" link="https://www.instagram.com/cejas_malaga/"/>
            </aside>
          </div>
        </article>
      </div>
    </>
  )
}
