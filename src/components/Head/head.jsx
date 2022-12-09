import React from 'react';
import s from './head.module.css';

function Header() {
  return (
    <>
      <div className={s.header}>
        Let's Start new our Grand and the BIGER Project
        <img
          className={s.logo}
          src="https://anmolmehta.s3.amazonaws.com/wp-content/uploads/20180125171318/Magical-Words-for-Meditation-by-J.-Krishnamurti.jpg"
        />
      </div>

      <div className={s.background}>
        <img
          className={s.magic}
          src="https://avatanplus.com/files/resources/original/5677cf8a73cdd151c402b4ea.png"
        />
      </div>
    </>
  );
}
export default Header;
