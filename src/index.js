import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Statistic, Col, Row } from 'antd';

let n = 5;

ReactDOM.render(
  <div style={{ marginLeft: 16, marginRight: 10 }}>
    <Row>
      <Col>
        <Statistic title="Константа n" value={n} />
      </Col>
      <Col style={{ marginLeft: 16 }}>
        <Statistic title="Сумма натуральных чисел" value={(n * (n + 1)) / 2} />
      </Col>
    </Row>
  </div>,
  document.getElementById('container')
);
