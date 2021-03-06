import React from 'react'
import header from '../../assets/images/header.png'
import './home.scss'
import Chart1 from "../chart1";
import Chart2 from "../chart2";
import Chart3 from "../chart3";
import Chart4 from "../chart4";
import Chart5 from "../chart5";
import Chart6 from "../chart6";
import Chart7 from "../chart7";
import Chart8 from "../chart8";
import Chart9 from "../chart9";
import Chart10 from "../chart10";
import Chart11 from "../chart11";
import Chart12 from "../chart12";
import Chart13 from "../chart13";
import Chart14 from "../chart14";

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
                <section className={'section4'}>
                    <Chart6/>
                    <div className={'bordered chart_wrapper 年龄'}>
                        <p>兰州市犯罪人员年龄分布</p>
                        <div className={'charts_content'}>
                            <Chart7/>
                            <Chart8/>
                            <Chart9/>
                        </div>
                    </div>
                </section>
                <section className={'section5'}>
                    <div className={'bordered chart_wrapper 类型'}>
                        <p>案发类型统计</p>
                        <div className={'container'}>
                            <Chart10/>
                            <Chart11/>
                        </div>
                    </div>
                    <div className={'bordered chart_wrapper 街道'}>
                        <p>兰州市案发街道统计</p>
                        <div className={'container charts'}>
                            <Chart12/>
                            <Chart13/>
                        </div>
                    </div>
                    <div className={'bordered chart_wrapper 手段'}>
                        <p>作案手段分析</p>
                        <Chart14/>
                    </div>
                </section>
            </main>
            <footer className={'footer'}>
                这是大屏幕项目的footer
            </footer>
        </div>
    )
};
