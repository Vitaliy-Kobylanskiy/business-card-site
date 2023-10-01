import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Home.module.scss';
import homePhoto from '../../img/photo1.jpg';

const Home = () => {
    return (
        <main className={cl.main}>
            <section className={cl.container}>
                <div className={cl.textWrapper}>
                    <p>Привіт !</p>
                    <p>Я Віталій</p>
                    <p>Володію необхідним стеком технологій та навичок для успішної роботи на посаді front-end розробника.</p>
                    <div className={cl.linkWrapper}>
                        <Link className={cl.link} to='/contact'>Зв'язатися</Link>
                    </div>
                </div>
                <div className={cl.photoWrapper}>
                    <img className={cl.mainPhoto} src={homePhoto} alt="homePhoto" />
                </div>
            </section>
        </main>
    );
};

export default Home;