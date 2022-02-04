import { Layout } from "antd";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = (props) => {
  const { Header, Content, Footer } = Layout;

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
      <Content style={{ marginTop: 64 }}>
        <div className="container">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        JITERA &copy;{new Date().getFullYear()} Assign to{" "}
        <a href="https://github.com/garudamon" target="_blank">
          @garudamon
        </a>
      </Footer>
    </Layout>
  );
};

export default Container;
