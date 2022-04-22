import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const chartDiv = useRef(null);
    useEffect(() => {
            const myChart = echarts.init(chartDiv.current);
            const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
            myChart.setOption(
                {
                    color: colors,
                    xAxis: {show: false},
                    yAxis: {show: false},
                    legend: {
                        show: true,
                        bottom: -px(10),
                        fontSize: px(12),
                        itemWidth: px(12),
                        itemHeight: px(6),
                        padding: px(10),
                        itemGap: px(10),
                        textStyle: {
                            color: '#fff',
                            fontSize: px(10),
                        },
                    },
                    series: [
                        {
                            startAngle: -20,
                            type: 'pie',
                            radius: ['25%', '90%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                                distanceToLabelLine: 0,
                                formatter(options) {
                                    return options.value * 100 + '%';
                                }
                            },
                            labelLine: {show: true, length: 0},
                            roseType: 'area',
                            itemStyle: {
                                shadowBlur: px(200),
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            data: [
                                {value: 0.36, name: '刑事案件'},
                                {value: 0.20, name: '民事案件'},
                                {value: 0.18, name: '经济案件'},
                                {value: 0.24, name: '其他案件'},
                            ]
                        }
                    ]
                });
        },
        []
    )
    return (
        <div className={'charts'} ref={chartDiv}/>
    )
};
