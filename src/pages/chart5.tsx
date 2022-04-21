import React from "react";

export default ()=>{
    return(
        <div className={'bordered chart_wrapper 战果'}>
            <p>往年战果数对比</p>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>类型</th>
                    <th>破案数</th>
                    <th>抓获嫌疑人</th>
                    <th>并串案件</th>
                    <th>现勘录入</th>
                    <th>视帧录入</th>
                    <th>合成案件数</th>
                    <th>合计</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2015</td>
                    <td>2</td>
                    <td>3</td>
                    <td>50</td>
                    <td>22</td>
                    <td>50</td>
                    <td>60</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>2016</td>
                    <td>3</td>
                    <td>4</td>
                    <td>20</td>
                    <td>10</td>
                    <td>50</td>
                    <td>80</td>
                    <td>20</td>

                </tr>
                <tr>
                    <td>2017</td>
                    <td>4</td>
                    <td>5</td>
                    <td>10</td>
                    <td>50</td>
                    <td>55</td>
                    <td>75</td>
                    <td>180</td>

                </tr>
                </tbody>
            </table>
        </div>
    )
};
