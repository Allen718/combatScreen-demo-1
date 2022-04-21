import React from 'react'
import header from '../../assets/images/header.png'
import './home.scss'
import Chart1 from "../chart1";
export default () => {
    return (
        <div className={'home'}>
            <header style={{backgroundImage:`url(${header})`}}/>
            <main>
                <section className={'section1 '}>
                    <Chart1/>
                </section>
                <section  className={'section2'}></section>
                <section className={'section3'}></section>
                <section className={'section4'}></section>
                <section className={'section5'}></section>
            </main>
        </div>
    )
};
