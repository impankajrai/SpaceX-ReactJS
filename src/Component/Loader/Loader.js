import React from 'react';
import {Spin} from 'antd';
import PropTypes from 'prop-types';

const Loader = ({children, spinning, tipNext, style}) => {

    return (
        <Spin spinning={spinning} tip={tipNext} style={{...style}}>
            {children}
        </Spin>
    )
}

Loader.propTypes = {
    spinning : PropTypes.bool.isRequired,
    tipNext : PropTypes.string,
    children : PropTypes.any,
    style : PropTypes.object
}

Loader.defaultProps = {
    tipNext : 'Loading'
};

export default Loader