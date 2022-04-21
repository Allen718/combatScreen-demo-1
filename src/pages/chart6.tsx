import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
// @ts-ignore
import china from '../china.json';
import {createEchartsOptions} from '../shared/createEchartsOptions';


export default () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '甘肃省', value: 1},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['甘肃省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '四川省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['四川省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '青海省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['青海省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered chart_wrapper map">
            <p>全市犯罪人员籍贯分布地</p>
            <div ref={divRef} className="chart"/>

        </div>
    );
}
