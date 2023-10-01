import React from 'react';
import medicalAppointment from '../../../img/medical-appointment.png';
import cl from '../Portfolio.module.scss';

const MedicalAppointmentProject = () => {
    return (
        <li className={cl.item}>
            <div className={cl.linkWrapper}>
                <a className={cl.link} href="https://vitaliy-kobylanskiy.github.io/medical-appointment/dist/index.html" target="_blank" rel="noopener noreferrer">
                    <img className={cl.photoSite} src={medicalAppointment} alt="medical-appointment" />
                </a>
            </div>
            <div className={cl.description}>
                <h2 className={cl.descriptionTitle}>Опис проекту:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Приклад робочої сторінки для запису до лікарів у лікарні. Створено для персоналу лікарні.</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Семантична та кросбраузерна верстка</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Адаптивна верстка</p>
                    </li>
                </ul>
                <h2 className={cl.descriptionTitle}>Використовував технології:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Написано на чистому JavaScript</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Для виконання цієї роботи було використано нативні методи JavaScript для взаємодії із сервером.</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Sass</p>
                    </li>
                </ul>
                <h2 className={cl.descriptionTitle}>Щоб завітати на сайт тисни на картинку, або:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://vitaliy-kobylanskiy.github.io/medical-appointment/dist/index.html" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Код проекту можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy/medical-appointment" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Весь GitHub можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
            </div>
        </li>
    );
};

export default MedicalAppointmentProject;