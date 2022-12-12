import Content from './Content';

export const Test = ({ logo, mainTitle  }) => {
  return (
    <div className="root">
      <div>
        {logo}
      </div>
      <button>Back</button>
      <section>
        <h2>{mainTitle}</h2>
        <Content/>
      </section>
    </div>
  )
}
