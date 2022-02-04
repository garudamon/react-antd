import { FC } from "react";
import { Col, Card, Typography } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { ItemProps } from "./types";

const Item: FC<ItemProps> = (props) => {
  const { Meta } = Card;
  const { Text } = Typography;
  const { username, name, email, phone, website } = props;

  return (
    <Col lg={6} xs={24} md={8} sm={12} className="gutter-row" span={6}>
      <Card
        cover={
          <img
            alt={username}
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          <HeartOutlined key="fav" className="pink-icon" />,
          <EditOutlined key="edit" />,
          <DeleteFilled key="delete" />,
        ]}
      >
        <Meta title={name} className="card-meta" />
        <Text ellipsis className="info">
          <MailOutlined key="email" /> {email}
        </Text>
        <Text ellipsis className="info">
          <PhoneOutlined key="email" /> {phone}
        </Text>
        <Text ellipsis className="info">
          <GlobalOutlined key="email" /> {website}
        </Text>
      </Card>
    </Col>
  );
};

export default Item;
