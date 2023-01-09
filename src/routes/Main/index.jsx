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
import { ScrollToTop, ModalNav, AlerPopUp } from '../../components'
import styles from './Main.module.css';
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-spring'

const Main = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollToRef = ref => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });

  useEffect(() => {
    window.scrollTo(0,0);
    setIsActive(true)
  }, [])

  const refs = {
    navMenu: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    services: useRef(null),
    training: useRef(null),
    feedback: useRef(null),
    questionnaire: useRef(null),
    maps: useRef(null),
    alert: useRef(null)
  }
  return (
    <div className={`${styles.root} ${isActive && styles.active}`}>
      <AlerPopUp reference={refs}/>
      <ModalNav reference={refs}/>
      <ScrollToTop/>
      <Header reference={refs} scrollToRef={scrollToRef}/>
      <PrimarySlogan/>
      <About reference={refs}/>
      <SecondarySlogan/>
      <Portfolio reference={refs}/>
      <Services reference={refs}/>
      <Training reference={refs}/>
      <Feedback reference={refs}/>
      <Questionnaire reference={refs}/>
      <Maps reference={refs}/>
      <Footer reference={refs} scrollToRef={scrollToRef}/>
    </div>
  );
}

export default Main;