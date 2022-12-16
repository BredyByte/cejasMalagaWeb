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
import { useRef } from 'react'

export const Main = () => {
  const scrollToref = ref => window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });

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
    <div className={styles.root}>
      <ScrollToTop refs={refs} scrollToref={scrollToref}/>
      <Header refs={refs} scrollToref={scrollToref}/>
      <PrimarySlogan/>
      <About referens={refs}/>
      <SecondarySlogan/>
      <Portfolio referens={refs}/>
      <Services referens={refs}/>
      <Training referens={refs}/>
      <Feedback referens={refs}/>
      <Questionnaire referens={refs}/>
      <Maps referens={refs}/>
      <Footer/>
    </div>
  );
}