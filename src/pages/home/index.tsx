import React from 'react'
import header from '../../assets/images/header.png'
import './home.scss'
import Chart1 from "../chart1";
import Chart2 from "../chart2";
import Chart3 from "../chart3";
import Chart4 from "../chart4";
import Chart5 from "../chart5";

export default () => {
    return (
        <div className={'home'}>
            <header style={{backgroundImage: `url(${header})`}}/>
            <main>
                <section className={'section1 '}>
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className={'section2'}>
                    <Chart3/>
                    <Chart4/>
                </section>
                <section className={'section3'}>
                    <Chart5/>
                </section>
                <section className={'section4'}></section>
                <section className={'section5'}></section>
            </main>
        </div>
    )
};
