
import {StarOutlined,ClockCircleOutlined,EyeInvisibleOutlined}  from "@ant-design/icons"
import { Button ,Card ,Col, Row, Statistic,Image } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import Pie from "./Pie"
const { Meta } = Card;
const Ecomerce = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <div className="ml-5 pl-14">
        <div>
                    <Row gutter={16}>
                <Col span={12}>
                <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                <Button
                className="bg-primary"
                    style={{
                    marginTop: 16,
                    }}
                    type="primary"
                >
                    Recharge
                </Button>
                </Col>
                <Col span={12}>
                <Statistic title="Active Users" value={112893} loading  className="text-white"/>
                </Col>
            </Row>
        </div>
        <hr />
        <div className="mt-4">
        <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
        </div>
        <hr />
       <div className="row mt-5">
        <h5>best outfits</h5>
          <div className="col-md-6 mt-4">
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="china Street beat" description="www.instagram.com" />
                </Card>
          </div>
       
          <div className="col-md-6 mt-4">
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<Image alt="example" src="https://i.pinimg.com/564x/3a/9b/2f/3a9b2f16622a1aef5393561fce9b775c.jpg" />}
                >
                    <Meta title="korea Street beat" description="www.instagram.com" />
                </Card>
          </div>
       
          <div className="col-md-6 mt-4">
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<Image alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHK03RKuSMkcXwfXNUqHts3kAPiqe0OH1zmlPCUmSftlA50IJY7AUivIMg-_8IGG4dn0k&usqp=CAU" />}
                >
                    <Meta title="usa Street beat" description="www.instagram.com" />
                </Card>
          </div>
       
          <div className="col-md-6 mt-4">
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<Image alt="example" src="https://i.pinimg.com/564x/8b/ba/97/8bba97de08cae8da5d130a11c14f2e34.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
          </div>
       </div>
       <hr />
       <div className="card p-2 mt-5 w-full flex justify-center items-center">
        <h3 className="h6 text-inherit">sales last month :</h3>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
        <Pie />
    </div>
  );
};

export default Ecomerce;