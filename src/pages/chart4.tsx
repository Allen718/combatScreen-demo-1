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

                title: {show: false},
                legend: {
                    show: false,
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
                    data: ['02', '04', '06', '08', 10, 12, 14, 16, 18, 20, 22, 24],
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
                        name: '案发率',
                        type: 'line',
                        areaStyle: {},
                        data: [0.15, 0.135, 0.115, 0.125, 0.135, 0.15,0.185, 0.245,0.265,0.255,0.25,0.205,0.145]
                    },

                ]
            }));
    }, [])
    return (
        <div className='bordered chart_wrapper 时段分析'>
            <p>案发时段分析</p>
            <div className={'charts'} ref={chartDiv}/>
        </div>
    )
};
