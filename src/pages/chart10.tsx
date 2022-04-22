import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const chartDiv = useRef(null);
    const myChart = useRef(null)
    const data = [
        {name: '入室抢劫', value: 40},
        {name: '当街抢劫', value: 25},
        {name: '团伙诈骗', value: 23},
        {name: '刑事案件', value: 20},
        {name: '民事案件', value: 35},
    ];
    const renderData = (data) => {
        myChart.current.setOption(
            {
                textStyle: {
                    fontSize: px(12),
                    color: '#79839E'
                },
                title: {show: false},
                legend: {show: false},
                xAxis: {
                    data: data.map(i => i.name),
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
                    data: data.map(i => i.value)
                }]
            });
    }
    useEffect(()=>{
        setInterval(()=>{
            const newData=[
                {name: '入室抢劫', value: Math.random()*10},
                {name: '当街抢劫', value: Math.random()*10},
                {name: '团伙诈骗', value: Math.random()*10},
                {name: '刑事案件', value: Math.random()*10},
                {name: '民事案件', value: Math.random()*10},
            ]
            renderData(newData)
        },1000)
    },[])
    useEffect(() => {
         myChart.current= echarts.init(chartDiv.current);
        renderData(data);
    }, [])
    return (
        <div className={'charts'} ref={chartDiv}/>
    )
};
