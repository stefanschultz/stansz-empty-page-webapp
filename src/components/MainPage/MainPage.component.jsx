import React from 'react';
import './MainPage.scss';
import PageCreator from '../PageCreator/PageCreator.component';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="MainPage">
        <Layout>
          <Header className="stansz-background-color-white">Header</Header>
          <Layout>
            <Content className="stansz-background-color-white">
              <Row>
                <Col span={24}>
                  <PageCreator />
                </Col>
              </Row>
            </Content>
          </Layout>
          <Footer className="stansz-background-color-white">Footer</Footer>
        </Layout>
      </div>
    );
  }
}