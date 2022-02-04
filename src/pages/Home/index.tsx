import { Row } from "antd";
import { Container, Loading, Item, Error } from "components";
import { useFetch } from "hooks";
import { ItemProps } from "components/Item/types";

const HomePage = () => {
  const { isLoading, error, response } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <Container>
      <>
        {isLoading && <Loading />}
        {error && (
          <Error
            title="Oops"
            description={error?.message || "Error while fetching data"}
          />
        )}
        {response && (
          <Row gutter={[16, 16]}>
            {response.map((item: ItemProps, itemId: number) => (
              <Item {...item} key={itemId} />
            ))}
          </Row>
        )}
      </>
    </Container>
  );
};

export default HomePage;
