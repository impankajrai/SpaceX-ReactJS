import React from "react";
import {Table} from "antd";
import styles from "./style.module.css";

const AntdTable = (props) => {
    const {tableColumns, dataSource, loading, pagination,
        onRow = () => {}, summary, handleChange, rowClassName, style, clickable, locale,showHeader=true} = props;


    return (
        <Table
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        onRow(record, rowIndex)
                    }
                };
            }}
            columns={tableColumns}
            showHeader={showHeader}
            rowKey={(record, index) => index}
            className={styles.table}
            dataSource={dataSource}
            pagination={pagination ? { ...pagination, showSizeChanger: false } : false}
            loading={loading}
            summary={summary}
            onChange={handleChange}
            style={{
                cursor : clickable ? 'pointer' : '',
                ...style
        }}
            rowClassName={rowClassName}
            locale={locale}
        />
    )
}

export default AntdTable;
