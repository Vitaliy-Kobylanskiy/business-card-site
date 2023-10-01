import React from 'react';
import commentList from '../../../img/my-comments-list.png';
import cl from '../Portfolio.module.scss';

const CommentListProject = () => {
    return (
        <li className={cl.item}>
            <div className={cl.linkWrapper}>
                <a className={cl.link} href="https://vitaliy-kobylanskiy.github.io/my-comments-list/dist/index.html" target="_blank" rel="noopener noreferrer" >
                    <img className={cl.photoSite} src={commentList} alt="comment-list" />
                </a>
            </div>
            <div className={cl.description}>
                <h2 className={cl.descriptionTitle}>Опис проекту:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Приклад списку коментарів із валідацією полів введення. </p>
                    </li>
                </ul>
                <h2 className={cl.descriptionTitle}>Використовував технології:</h2>
                <ul className={cl.descriptionList}>
                    <li className={cl.descriptionItem}>
                        <p className={cl.descriptionText}>Виконано за допомогою збірки в Gulp</p>
                    </li>
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
                    <a className={cl.descriptionLink} href="https://vitaliy-kobylanskiy.github.io/my-comments-list/dist/index.html" target="_blank" rel="noopener noreferrer" >Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Код проекту можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy/my-comments-list" target="_blank" rel="noopener noreferrer" >Перейди за посиланням</a>
                </div>
                <h2 className={cl.descriptionTitle}>Весь GitHub можна переглянути тут:</h2>
                <div className={cl.descriptionBtn}>
                    <a className={cl.descriptionLink} href="https://github.com/Vitaliy-Kobylanskiy" target="_blank" rel="noopener noreferrer" >Перейди за посиланням</a>
                </div>
            </div>
        </li>
    );
};

export default CommentListProject;