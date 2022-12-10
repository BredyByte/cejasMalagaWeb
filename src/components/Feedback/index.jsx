import { SectionTitle } from '../'
import styles from './Feedback.module.css'

export const Feedback = () => {
  return (
    <section className={styles.root}>
      <SectionTitle subtitleFirst={"Как отзываются"} subtitleSecond={"мои клиенты"} title={"Отзывы"} />
      <article>

      </article>
    </section>
  )
}