import { SliderSlick } from '../../../components/Slider/slider';
import { descriptionList } from '../../../components/DescriptionList';
import { Footer } from '../../Footer';
import { Services } from '../../Services';
import { Layers } from '../../../components/SectionLayers';
import { ReactComponent as ListStar } from '../../../assets/img/ListStar.svg';
import style from './Text.module.css';

<descriptionList />;

export const Uslugi = () => {
  return (
    <section className={`${style.root} container`}>
      <Services />
      <section className={style.FirstTextContainer}>
        <p>
          Профессиональный перманентный макияж губ создает естественный эффект: подчеркивает
          натуральность, убирает мелкие недостатки, добавляет насыщенность. Бережный, деликатный
          перманент губ не бросается в глаза, но кардинально преображает лицо, делает губы
          выразительными, пухлыми даже без помады или карандаша. Долгосрочный результат
          перманентного макияжа губ сполна оправдывает его стоимость. Перманентный макияж губ может
          выполняться как в натуральной технике с очень легким и естественным оттенком пигмента, так
          и в более плотной технике с помадным прокрасом губ. Проводится в 2 этапа: На 1 этапе мы
          подбираем вам подходящую вам форму губ, мастер создает дизайн губ, затем проводится сама
          процедура с помощью современного оборудования и в новых техниках, которые безболезненны и
          не наносят вред губам. Пигмент вносится только в верхние слои кожи, не нанося травм и не
          трансформируясь со временем в другие цвета. На 2 этапе проводится коррекция цвета, мастер
          добавляет пигмент в те участки губ, где не хватает цвета.
        </p>
      </section>

      <section className={style.SecondTextContainer}>
        <p>Для кого нужна эта процедура:</p>
        {descriptionList.map((i) => (
          <li className={style.textList} key={i.id}>
            <ListStar className={style.starLogo} />
            {i.text}
          </li>
        ))}
      </section>
      <SliderSlick />

      <section className={style.textAfterSlide}>
        <section>
          <h3 className={style.price}>Цена: 20€</h3>
        </section>
        <section>
          <button className={style.textBack}>Записаться</button>
        </section>
      </section>
      <Layers />
      <Footer />
    </section>
  );
};
