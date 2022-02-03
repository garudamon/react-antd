import {useEffect} from 'react';
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Row, Col, Card } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";


const App = () => {

  useEffect(() => {
      document.title = "JITERA – Coding Assignment"
  }, []);

  let items: Array<string> = Array(50).fill("Ant");

  const { Header, Content, Footer } = Layout;
  const { Meta } = Card;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo">
          <img
            src="https://iruuza-inc.com/packs/media/styles/img/logo-jitera-white-0cba213098fb44f164173063eaef1f34.svg"
            alt="JITERA"
            height={20}
          />
        </div>
      </Header>
      <Content
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row gutter={[16, 16]}>
            {items.map((v: string, idx: number) => {
              return (
                <Col
                  lg={6}
                  xs={24}
                  md={8}
                  sm={12}
                  className="gutter-row"
                  span={6}
                  key={idx}
                >
                  <Card
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <HeartOutlined key="fav" className="pink-icon" />,
                      <EditOutlined key="edit" />,
                      <DeleteFilled key="delete" />,
                    ]}
                  >
                    <Meta title={v} className="card-meta" />
                    <div className="info">
                      <MailOutlined key="email" /> garudamon.letter@gmail.com
                    </div>
                    <div className="info">
                      <PhoneOutlined key="email" /> +62-856-9101-111
                    </div>
                    <div className="info">
                      <GlobalOutlined key="email" /> https://han.if/
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        JITERA &copy;{new Date().getFullYear()} Assign to{" "}
        <a href="https://github.com/garudamon" target="_blank">
          @garudamon
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
