import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';

const px = (n) => n / 2420 * (window as any).pageWidth;
export default () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '男', value: 0.2},
        {name: '女', value: 0.8},
    ]
    const renderData = (data) => {
        myChart.current.setOption({
            color: ['#8D70F8', '#33A4FA'],
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {
                show: true,
                bottom: -px(10),
                left: 0,
                fontSize: px(12),
                itemWidth: px(24),
                itemHeight: px(12),
                textStyle: {
                    color: '#fff',
                    fontSize: px(10),
                },
            },
            grid: {
                top: px(0),
                left: px(10),
                right: px(10),
                bottom: px(30),
                containLabel: false
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
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: {show: false},
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data,
                }
            ]

        })
    }

    useEffect(() => {
        setInterval(() => {
            const man = Number(Math.random().toFixed(1));
            const woman = (1 - man).toFixed(1);
            const newData = [{name: '男', value: man}, {name: '女', value: woman}]
            renderData(newData);
        }, 1000)
    }, [])
    useEffect(() => {
         myChart.current= echarts.init(divRef.current);
         renderData(data)

    }, [])
    return (
        <div className={'图一'}>
            <div ref={divRef} className={'bin'}/>
            <div className="text">性别</div>
        </div>
    )
};
