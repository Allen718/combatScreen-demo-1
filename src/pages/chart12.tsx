import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

export default () => {
    const px = (n) => n / 2420 * (window as any).pageWidth;
    const chartDiv = useRef(null);
    const data = [
        {value: 0.08, name: '东岗路'},
        {value: 0.06, name: '段家滩'},
        {value: 0.11, name: '雁北'},
        {value: 0.09, name: '五泉山'},
        {value: 0.12, name: '中山路'},
        {value: 0.06, name: '庆阳路'},
        {value: 0.08, name: '武都路'},
        {value: 0.08, name: '酒泉路'},
        {value: 0.08, name: '天水路'},
    ];
    useEffect(() => {
            const myChart = echarts.init(chartDiv.current);
            const colors = ['#8776f0', '#e76d69', '#e76d69', '#e9e64c', '#67d885','#53a3f2'];
            myChart.setOption(
                {
                    color:colors,
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        top: 'center',
                        textStyle: {color: 'white',fontSize:px(10)},
                        itemWidth: px(10),
                        itemHeight: px(10),
                        formatter(name) {
                            const value = data.filter(i => i.name === name)[0]?.value * 100 + '%';
                            return name + ' ' + value;
                        }
                    },
                    series: [
                        {
                            center: ['60%', '50%'],
                            type: 'pie',
                            radius: '80%',
                            label: {show: false},
                            labelLine: {show: false},
                            data: data,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
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
