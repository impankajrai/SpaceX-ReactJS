import React from 'react';
import {Spin} from "antd";

const SpinLoader = () => (
    <Spin
        size="large"
        style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            top:0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto'
        }}
    />
)

export default SpinLoader