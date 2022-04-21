import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions'


export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const chartDiv = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(chartDiv.current);
        myChart.setOption(createEchartsOptions(
            {
                ...createEchartsOptions,
                textStyle: {
                    fontSize: px(12),
                    color: '#79839E'
                },
                title: {show: false},
                legend: {
                    bottom: px(10),
                    textStyle: {color: 'white'},
                    itemWidth: px(30),
                    itemHeight: px(16)
                },
                grid: {
                    x: px(20),
                    x2: px(20),
                    y: px(20),
                    y2: px(70),
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                    splitLine: {show: true, lineStyle: {color: '#073E78'}},
                    axisTick: {show: false},
                    axisLine: {show: false},
                },
                yAxis: {
                    type: 'value',
                    splitLine: {lineStyle: {color: '#073E78'}},
                    axisLabel: {
                        formatter(val) {
                            return val * 100 + '%';
                        }
                    }
                },
                series: [
                    {
                        name: '盗窃',
                        type: 'line',
                        data: [0.225, 0.21, 0.20, 0.185, 0.24, 0.23, 0.25, 0.245]
                    },
                    {
                        name: '两抢',
                        type: 'line',
                        data: [0.225, 0.175, 0.135, 0.13, 0.12, 0.14, 0.15, 0.20, 0.19]
                    },
                    {
                        name: '诈骗',
                        type: 'line',
                        data: [0.175, 0.15, 0.14, 0.18, 0.17, 0.24, 0.215, 0.19, 0.21]
                    },
                    {
                        name: '醉驾',
                        type: 'line',
                        data: [0.14, 0.19, 0.185, 0.17, 0.175, 0.23, 0.27, 0.29, 0.325]
                    },
                    {
                        name: '网络诈骗',
                        type: 'line',
                        data: [0.12, 0.10, 0.15, 0.195, 0.25, 0.30, 0.35, 0.35, 0.395]
                    },
                    {
                        name: '故意杀人',
                        type: 'line',
                        data: [0.10, 0.125, 0.15, 0.18, 0.14, 0.23, 0.27, 0.26, 0.21]
                    },
                ].map(obj => ({
                    ...obj,
                    symbol: 'circle',
                    symbolSize: px(12),
                    lineStyle: {width: px(2)}
                }))
            }));
    }, [])
    return (
        <div className='bordered chart_wrapper 趋势分析'>
            <p>发案趋势分析</p>
            <div className={'charts'} ref={chartDiv}/>
        </div>
    )
};
