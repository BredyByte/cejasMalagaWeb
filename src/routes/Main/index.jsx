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
} from '../../pages'
import { ScrollToTop, ModalNav, AlerPopUp } from '../../components'
import styles from './Main.module.css'
import { useEffect, useRef, useState } from 'react'

const Main = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollToRef = ref => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true)
    }

    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsActive(true)
  }, []);

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
  };


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
  )
};

export default Main;