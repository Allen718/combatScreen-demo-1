import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';

const px = (n) => n / 2420 * (window as any).pageWidth;
export default () => {
    const divRef = useRef(null);
    const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            color:colors,
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {
                show: true,
                bottom: -px(10),
                fontSize: px(12),
                itemWidth: px(12),
                itemHeight: px(6),
                padding:px(10),
                itemGap:px(10),
                textStyle: {
                    color:'#fff',
                    fontSize:px(10),
                },
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
                        formatter(options) {
                            return (options.value * 100).toFixed(0) + '%';
                        }
                    },
                    labelLine: {show: false},
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data: [
                        {value: 0.07, name: '10-20'},
                        {value: 0.10, name: '20-30'},
                        {value: 0.23, name: '30-40'},
                        {value: 0.28, name: '40-50'},
                        {value: 0.32, name: '50-60'},
                    ]
                }
            ]

        }));
    }, [])
    return (
        <div className={'图二'}>
            <div ref={divRef} className={'bin'}/>
            <div className="text">年龄段</div>
        </div>
    )
};
