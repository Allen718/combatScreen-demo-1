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
                color: '#F7A110',
                title: {show: false},
                legend: {
                    show: true,
                    bottom:0,
                    fontSize: px(12),
                    itemHeight: px(16),
                    textStyle:{
                        color:'#fff',
                        fontSize: px(12)
                    },
                },
                grid: {
                    x: px(20),
                    x2: px(20),
                    y: px(20),
                    y2: px(30),
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [18, 28, 38, 48, 58, 68, 78],
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
                        data: [0.195, 0.215, 0.275, 0.355, 0.255, 0.195, 0.125, 0.105],
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: {width: px(2)},
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F7A110'
                            }, {
                                offset: 1,
                                color: '#1B1D52'
                            }]),
                        }
                    },


                ]
            }));
    }, [])
    return (
        <div className='bordered  图三'>
            <p className={'title'}>犯罪年龄趋势图</p>
            <div className={'bin'} ref={chartDiv}/>
        </div>
    )
};
