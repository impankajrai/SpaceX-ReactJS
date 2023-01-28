import { Row, Col } from "antd";
import React from 'react'
import styles from './style.module.css';

const NoResult = () => {
    return (
        <Row className={styles.noTextWrapper}>
          <Col className={styles.nodata}>
            <Row>
              <Col>
                <h1>ERROR</h1>
              </Col>
            </Row>
            <Row style={{ paddingTop : `20px` }}>
              <Col
                className={styles.normalText}
                style={{ margin: "auto", fontSize: "16px" }}
              >
                There are no items found
              </Col>
            </Row>
          </Col>
        </Row>
    )
}

export default NoResult;