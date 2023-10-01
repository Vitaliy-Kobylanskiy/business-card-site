import React from 'react';
import cl from './Portfolio.module.scss';
import BestFriendsProject from './BestFriendsProject/BestFriendsProject';
import BusinessCardProject from './BusinessCardProject/BusinessCardProject';
import MedicalAppointmentProject from './MedicalAppointmentProject/MedicalAppointmentProject';
import ClassicWoodProject from './ClassicWoodProject/ClassicWoodProject';
import CommentListProject from './CommentListProject/CommentListProject';


const Portfolio = () => {
    return (
        <main className={cl.main}>
            <section className={cl.container}>
                <ul className={cl.list}>
                    <BestFriendsProject />
                    <BusinessCardProject />
                    <MedicalAppointmentProject />
                    <ClassicWoodProject />
                    <CommentListProject />
                </ul>
            </section>
        </main>
    );
};

export default Portfolio;