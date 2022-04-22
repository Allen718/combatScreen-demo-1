import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const chartDiv = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(chartDiv.current);
        myChart.setOption(
            {
                textStyle: {
                    fontSize: px(12),
                    color: '#79839E'
                },
                title: {show: false},
                legend: {show: false},
                xAxis: {
                    data: ['入室抢劫', '当街抢劫', '团伙诈骗', '刑事案件', '民事案件'],
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
                    y2: px(40),
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
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(62, 148, 243)'
                            }, {
                                offset: 1,
                                color: '#1a42f0'
                            }]),
                        }
                    },
                    data: [40, 25, 23, 20, 35]
                }]
            });
    }, [])
    return (
        <div className={'charts'} ref={chartDiv}/>
    )
};
