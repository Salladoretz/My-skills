import React from 'react';
import Me from '../../../imgs/Me.jpg'
import css from './Bottom.module.css'
import Skills from './Skills/Skills';


export default function Bottom() {
    return (
        <div className={css.bottom}>
            <div className={css.aboutMe}>
                <img src={Me} alt='' />
                <p>Привет!</p>
                <p>Меня зовут Филипп Ли.</p>
                <p>Мне 45 лет.</p>
                <p>Живу в Хабаровске.</p>
                <p>Я успел побывать юристом, рекламщиком, сценаристом и даже владельцем пилорамы.</p>
                <p>Есть высшее экономическое образование. Даже красный диплом</p>
                <p>Полтора года назад я начал изучать программирование. На курсы не ходил. Только YouTube!!!</p>
                <p>Справа вы видите технологии, которые я постарался освоить {String.fromCharCode(0x2794)}</p>
                <p>Быстрее приглашайте меня к себе в команду - мне нужна практика на реальных коммерческих проектах,
                    а вам наверняка нужен такой смекалистый и нетоксичный старый джун!</p>
            </div>
            <div className={css.skills}>
                <Skills />
            </div>
        </div >
    )
}
