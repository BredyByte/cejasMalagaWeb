import {
  Maps,
  Feedback,
  Footer,
  Questionnaire,
  Training,
  Portfolio,
  Services,
  SecondarySlogan,
  Header,
  PrimarySlogan,
  About
} from '../../pages';
import { ScrollToTop } from '../../components'
import styles from './Main.module.css';
import { useEffect, useRef, useState } from 'react'

export const Main = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollToref = ref => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });

  useEffect(() => {
    window.scrollTo(0,0);
    setIsActive(true)
  }, [])

  const refs = {
    about: useRef(null),
    portfolio: useRef(null),
    services: useRef(null),
    training: useRef(null),
    feedback: useRef(null),
    questionnaire: useRef(null),
    maps: useRef(null),
  }
  return (
    <div className={`${styles.root} ${isActive && styles.active}`}>
      <ScrollToTop refs={refs} scrollToref={scrollToref}/>
      <Header refs={refs} scrollToref={scrollToref}/>
      <PrimarySlogan/>
      <About reference={refs}/>
      <SecondarySlogan/>
      <Portfolio reference={refs}/>
      <Services reference={refs}/>
      <Training reference={refs}/>
      <Feedback reference={refs}/>
      <Questionnaire reference={refs}/>
      <Maps reference={refs}/>
      <Footer refs={refs} scrollToref={scrollToref}/>
    </div>
  );
}