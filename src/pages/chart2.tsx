import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
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
                    data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局', '永登县公安局', '皋兰区公安局', '榆中县公安局', '新区公安局'],
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
                        data: [100, 300, 80, 115, 234, 276, 123, 372, 324]
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
                        data: [145, 276, 120, 65, 320, 189, 178, 287, 312]
                    }
                ]
            }));
    }, [])
    return (
        <div className='bordered chart_wrapper 破获排名'>
            <p>案件破获排名</p>
            <div className={'charts'} ref={chartDiv}/>
        </div>
    )
};
