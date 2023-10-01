import React from 'react';
import cl from './Contact.module.scss';
import mailImg from '../../img/mail-img.png';
import phoneImg from '../../img/phone-img.png';
import telegrammImg from '../../img/telegramm-img.png';
import instImg from '../../img/inst-img.png';

const Contact = () => {
    return (
        <main className={cl.main}>
            <section className={cl.container}>
                <div className={cl.wrapper}>
                    <img className={cl.mailImg} src={mailImg} alt="email" />
                    <ul className={cl.list}>
                        <li className={cl.item}>vitkoby27@gmail.com</li>
                        <li className={cl.item}>vitkoby29@gmail.com</li>
                    </ul>
                </div>
                <div className={cl.wrapper}>
                    <img className={cl.phoneImg} src={phoneImg} alt="phone" />
                    <p className={cl.text}>063 862 72 40</p>
                </div>
                <div className={`${cl.wrapper} ${cl.socialWrapper}`}>
                    <div className={cl.socialLinkWrapper}>
                        <a className={cl.socialLink} href="https://t.me/vskoby" target="_blank" rel="noopener noreferrer">
                            <img className={cl.telegramm} src={telegrammImg} alt="tele" />
                        </a>
                        <a className={cl.linkToGo} href="https://t.me/vskoby" target="_blank" rel="noopener noreferrer">Перейти</a>
                    </div>
                    <div className={cl.socialLinkWrapper}>
                        <a className={cl.socialLink} href="https://www.instagram.com/vk0by/" target="_blank" rel="noopener noreferrer">
                            <img className={cl.insta} src={instImg} alt="inst" />
                        </a>
                        <a className={cl.linkToGo} href="https://www.instagram.com/vk0by/" target="_blank" rel="noopener noreferrer">Перейти</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;