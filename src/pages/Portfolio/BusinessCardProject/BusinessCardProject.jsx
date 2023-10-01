import React from 'react';
import businessCard from '../../../img/business-card.png';
import cl from '../Portfolio.module.scss';

const BusinessCardProject = () => {
    return (
        <li className={cl.item}>
            <div className={cl.linkWrapper}>
                <a className={cl.link} href="https://vitaliy-kobylanskiy.github.io/business-card-site/" target="_blank" rel="noopener noreferrer">
                    <img className={cl.photoSite} src={businessCard} alt="business-card" />
                </a>
            </div>
            <div className={cl.description}>
                <h2 className={cl.descriptionTitle}>Опис проекту:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Невеликий проект для знайомства</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Семантична та кросбраузерна верстка</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Адаптивна верстка (з використанням бургер меню)</p>
                    </li>
                </ul>
                <h2 className={cl.descriptionTitle}>Використовував технології:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>React Hooks</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>React Router Dom</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Sass</p>
                    </li>
                </ul>
                <h2 className={cl.descriptionTitle}>Щоб завітати на сайт тисни на картинку, або:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://vitaliy-kobylanskiy.github.io/business-card-site/" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Код проекту можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy/business-card-site" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Весь GitHub можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
            </div>
        </li>
    );
};

export default BusinessCardProject;