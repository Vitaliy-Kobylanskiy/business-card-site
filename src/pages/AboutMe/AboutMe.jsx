import React from 'react';
import cl from './AboutMe.module.scss';
import aboutMePhoto1 from '../../img/photo2.jpg';
import aboutMePhoto2 from '../../img/photo3.jpg';
import aboutMePhoto3 from '../../img/photo4.jpg';

const AboutMe = () => {
    return (
        <main className={cl.main}>
            <section className={cl.container}>
                <div className={cl.block}>
                    <div className={cl.textWrapper}>
                        <p className={cl.text}>Всім ще раз привіт! Отже, ви вже знаєте, що мене звуть Віталій. Трохи про себе:  31 рік, не забуваю про спорт, подобається подорожувати як нашою красивою країною, так і за її межами , живу в Миколаїві, Україна.</p>
                    </div>
                    <div className={cl.photoWrapper}>
                        <img className={`${cl.photo} ${cl.black}`} src={aboutMePhoto1} alt="my-photo" />
                    </div>
                </div>
                <div className={cl.block}>
                    <div className={cl.photoWrapper}>
                        <img className={cl.photo} src={aboutMePhoto3} alt="my-photo" />
                    </div>
                    <div className={cl.textWrapper}>
                        <p className={cl.text}>Чому саме програмування? Протягом свого життя працював у різних сферах. Обіймав різні посади, від робітника до невеликого керівника, але робота не приносила належного задоволення, та й оплата не завжди була на тому рівні, який у наш час вважається необхідним. Розуміючи, що необхідно пробувати себе в чомусь новому, захопився спочатку вивченням базової верстки, що мені дуже сподобалося. Далі вирішив розвивати саме front-end напрямок, опанував JavaScript, а після React.</p>
                    </div>
                </div>
                <div className={cl.block}>
                    <div className={`${cl.textWrapper} ${cl.description}`}>
                        <p className={`${cl.text} ${cl.skills}`}>Навички, якими я володію на сьогодні:</p>
                        <p className={cl.textDescription}>HTML/CSS:</p>
                        <ul>
                            <li>Семантична та кросбраузерна верстка</li>
                            <li>Адаптивна верстка (бургер меню, а також був досвід роботи mobile first)</li>
                            <li>Робота з анімацією</li>
                            <li>Предпроцессор Sass</li>
                            <li>Мав досвід роботи з Bootstrap</li>
                            <li>Методологія БЕМ</li>
                        </ul>
                        <p className={cl.textDescription}>JavaScript:</p>
                        <ul>
                            <li>Знання принципів роботи JavaScript</li>
                            <li>Знання Ajax, Rest Api</li>
                            <li>Знання принципів ООП</li>
                        </ul>
                        <p className={cl.textDescription}>React:</p>
                        <ul>
                            <li>Знання принципів роботи React</li>
                            <li>Структурований підхід до компонентів у React проектах для зручної підтримки та подальшого поліпшення застосунку</li>
                            <li>Бібліотека Redux (у великих проєктах React, Redux значно полегшує управління станами додатка)</li>
                            <li>Архітектурний патерн Flux</li>
                            <li>Middleware</li>
                            <li>React hooks</li>
                        </ul>
                        <p className={cl.textDescription}>Додаткові технології необхідні для роботи:</p>
                        <ul>
                            <li>Git</li>
                            <li>Gulp</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className={cl.photoWrapper}>
                        <img className={`${cl.photo} ${cl.black}`} src={aboutMePhoto2} alt="my-photo" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMe;