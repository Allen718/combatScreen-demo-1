import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const data = [
        {value: 40, name: '东岗路'},
        {value: 30, name: '段家滩'},
        {value: 25, name: '雁北'},
        {value: 18, name: '五泉山'},
        {value: 23, name: '中山路'},
        {value: 15, name: '庆阳路'},
        {value: 20, name: '武都路'},
        {value: 28, name: '酒泉路'},
        {value: 36, name: '天水路'},
    ];
    const chartDiv = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(chartDiv.current);
        const dataX=data.map(i=>i.name);
        const dataY=data.map(i=>i.value);
        myChart.setOption(
            {
                textStyle: {
                    fontSize: px(12),
                    color: '#79839E'
                },
                title: {show: false},
                legend: {show: false},
                xAxis: {
                    data: dataX,
                    axisTick: {show: false},
                    axisLine: {
                        lineStyle: {color: '#083B70'}
                    },
                    axisLabel: {
                        fontSize: px(12),
                        color:"#fff",
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
                    y2: px(30),
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
                    data: dataY
                }]
            });
    }, [])
    return (
        <div className={'charts'} ref={chartDiv}/>
    )
};
