import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {createEchartsOptions} from '../shared/createEchartsOptions'

export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const chartDiv = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '城关区公安局', 2011: 100, 2012: 145},
        {name: '七里河区公安局', 2011: 300, 2012: 276},
        {name: '西固区公安局', 2011: 80, 2012: 120},
        {name: '安宁区公安局', 2011: 115, 2012: 65},
        {name: '红古区公安局', 2011: 234, 2012: 320},
        {name: '永登县公安局', 2011: 276, 2012: 189},
        {name: '皋兰县公安局', 2011: 133, 2012: 178},
        {name: '榆中县公安局', 2011: 376, 2012: 287},
        {name: '新区公安局', 2011: 324, 2012: 312},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '城关区公安局', 2011: 100, 2012: Math.random() * 100},
                {name: '七里河区公安局', 2011: Math.random() * 100, 2012: 276},
                {name: '西固区公安局', 2011: 80, 2012:Math.random() * 100},
                {name: '安宁区公安局', 2011: Math.random() * 100, 2012: 65},
                {name: '红古区公安局', 2011: Math.random() * 100, 2012: 320},
                {name: '永登县公安局', 2011: 276, 2012: Math.random() * 100},
                {name: '皋兰县公安局', 2011: 133, 2012: 178},
                {name: '榆中县公安局', 2011: Math.random() * 100, 2012: 287},
                {name: '新区公安局', 2011: 324, 2012: 312},
            ];
            renderData(newData)

        }, 1000);


    }, [])

    const renderData = (data) => {
        myChart.current.setOption(createEchartsOptions({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: {show: false},
            legend: {
                show: true,
                bottom: px(10),
                right: px(40),
                itemWidth: px(18),
                itemHeight: px(12),
                textStyle: {color: 'white'},
            },
            grid: {
                x: px(20),
                y: px(20),
                x2: px(20),
                y2: px(40),
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                splitLine: {show: false},
                axisLabel: {show: false},
                axisLine: {show: false},
                // boundaryGap: [0, 0.01],
            },
            yAxis: {
                type: 'category',
                axisTick: {show: false},
                data: data.map(i => i.name),
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '破案排名',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    },
                    data: data.map(i => i[2011]),
                },
                {
                    name: '破案排名2',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    },
                    data: data.map(i => i[2012]),
                }
            ]

        }));

    };
    useEffect(() => {
        myChart.current = echarts.init(chartDiv.current);
        renderData(data);
    }, [])
    return (
        <div className='bordered chart_wrapper 破获排名'>
            <p>案件破获排名</p>
            <div className={'charts'} ref={chartDiv}/>
        </div>
    )
}
;
