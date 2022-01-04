import './App.css';
import { Statistic, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

function App() {
  let n = 5;
  return (
    <div style={{marginLeft:15}}>
      <Row gutter={15}>
      <Col>
        <Statistic title="Константа n" value={n} />
      </Col>
      <Col>
        <Statistic title="Сумма натуральных чисел" value={(n * (n + 1)) / 2} />
      </Col>
    </Row>
    </div>
    
  );
}

export default App;
