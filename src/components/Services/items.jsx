const itemInfo = [
  {
    id: 1,
    title: 'Услуги',
  },
  {
    id: 2,
    Firtslayer: 'Перманентный макияж губ',
  },
  {
    id: 3,
    Secondlayer: 'Перманентный макияж губ',
  },
  {
    id: 4,
    Fourdlayer: 'Ламинирование ресниц',
  },
  {
    id: 5,
    Fivethlayer: 'Перманентный макияж губ',
  },
  {
    id: 6,
    Sixthlayer: 'Дизайн бровей',
  },
  {
    id: 7,
    Seventhlayer: 'Ламинирование бровей+окрашивание',
  },
];

export const Caption = (props) => {
  return (
    <div>
      {itemInfo.map((i) => (
        <div key={i.id}>
          <title>{i.text}</title>
        </div>
      ))}
    </div>
  );
};
