import React from 'react';
import bestFriends from '../../../img/best-friends.png';
import cl from '../Portfolio.module.scss';

const BestFriendsProject = () => {
    return (
        <li className={cl.item}>
            <div className={cl.linkWrapper}>
                <a className={cl.link} href="https://vitaliy-kobylanskiy.github.io/best-friend-social/#/login/" target="_blank" rel="noopener noreferrer" >
                    <img className={cl.photoSite} src={bestFriends} alt="best-friends" />
                </a>
            </div>
            <div className={cl.description}>
                <h2 className={cl.descriptionTitle}>Опис проекту:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Приклад робочої соціальної мережі з можливістю зайти в тестовому режимі та використовувати її функціонал</p>
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
                        <p className={cl.descriptionText}>React Hooks</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Axios</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>React Router Dom</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Redux</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Redux Form</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Redux Thunk</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Reselect</p>
                    </li>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Sass</p>
                    </li>
                </ul>
                <h2 className={cl.descriptionTitle}>Щоб завітати на сайт тисни на картинку, або:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://vitaliy-kobylanskiy.github.io/best-friend-social/#/login/" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Код проекту можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy/best-friend-social" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Весь GitHub можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy" target="_blank" rel="noopener noreferrer">Перейди за посиланням</a>
                </div>
            </div>
        </li>
    );
};

export default BestFriendsProject;