import { Space, Spin, Typography } from "antd";

const Loading = () => {
  const { Text } = Typography;
  return (
    <Space size="middle">
      <Spin size="large" />
      <Text>Loading Data</Text>
    </Space>
  );
};

export default Loading;
