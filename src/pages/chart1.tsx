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
                    textStyle: {
                        fontSize: px(12),
                        color: '#79839E'
                    },
                    title: {show: false},
                    legend: {show: false},
                    xAxis: {
                        data: ['城关区', '七里河区', '西固区', '安宁区', '红古区', '永登区', '皋兰区', '渝州区', '兰州新区'],
                        axisTick: {show: false},
                        axisLine: {
                            lineStyle: {color: '#083B70'}
                        },
                        axisLabel: {
                            fontSize: px(12),
                            formatter(val) {
                                if (val.length > 2) {
                                    const array = val.split('');
                                    array.splice(2, 0, '\n');
                                    return array.join('');
                                } else {
                                    return val;
                                }
                            }
                        },
                    },
                    grid: {
                        x: px(40),
                        y: px(40),
                        x2: px(40),
                        y2: px(60),
                    },
                    yAxis: {
                        splitLine: {show: false},
                        axisLine: {
                            show: true,
                            lineStyle: {color: '#083B70'}
                        },
                        axisLabel: {
                            fontSize: px(12)
                        }
                    },
                    series: [{
                        type: 'bar',
                        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
                    }]
                }));
        },
        []
    )
    return (
        <div className='bordered chart_wrapper 管辖统计'>
            <p>案发派出所管辖统计</p>
            <div className={'charts'} ref={chartDiv}/>
        </div>
    )
};
