import React from 'react'
import header from '../../assets/images/header.png'
import './home.scss'
export default () => {
    return (
        <div className={'home'}>
            <header style={{backgroundImage:`url(${header})`}}/>
        </div>
    )
};
