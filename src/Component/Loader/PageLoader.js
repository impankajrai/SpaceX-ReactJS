import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd'
import useTimeout from "../../Hooks/useTimeout";

function PageLoading(props) {
    const [showLoading, setShowLoading] = useState(!props.delay);

    useTimeout(() => {
        setShowLoading(true);
    }, props.delay);

    if (!showLoading) {
        return null;
    }

    return (
        <Spin spinning={showLoading}/>
    );
}

PageLoading.propTypes = {
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

PageLoading.defaultProps = {
    delay: false
};

export default PageLoading;
