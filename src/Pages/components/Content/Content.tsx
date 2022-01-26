import {
  Container,
  ItemImage,
  ItemImageAppStore,
  ItemList,
  ItemListAppStore,
  Link,
  List,
  ListAppStore,
  PostedAt,
  PostedAtSpan,
  TextContent,
  TextContentAppStore,
  Title,
} from "./styles";

interface Props {
  data: any;
}

export const Content: React.FC<Props> = ({ data }) => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Container>
      {data?.media_press_blogs?.length > 0 && (
        <Title>Media, press and blogs</Title>
      )}

      <List>
        {data.media_press_blogs?.map((item: any) => (
          <ItemList key={item?.id} onClick={() => goToLink(item?.link)}>
            <ItemImage src={item?.link_img} alt={item?.name} />
            <Link>{item?.link}</Link>
            <TextContent>{item?.title}</TextContent>
            <PostedAt>
              <PostedAtSpan>{item?.name}</PostedAtSpan>
              Nov 9, 2021
            </PostedAt>
          </ItemList>
        ))}
      </List>

      {data?.developers_apps?.length > 0 && (
        <Title>you.com developer apps</Title>
      )}

      <List>
        {data?.developers_apps?.map((item: any) => (
          <ItemList key={item?.id} onClick={() => goToLink(item?.link)}>
            <ItemImage src={item?.link_img} alt={item?.name} />
            <Link>{item?.link}</Link>
            <TextContent>{item?.title}</TextContent>
            <PostedAt>
              <PostedAtSpan>{item?.sub_title}</PostedAtSpan>
            </PostedAt>
          </ItemList>
        ))}
      </List>

      {data?.app_store?.length > 0 && <Title>Search-app store</Title>}

      <ListAppStore>
        {data?.app_store?.map((item: any) => (
          <ItemListAppStore key={item?.id}>
            <ItemImageAppStore src={item?.img} alt={item?.name} />
            <TextContentAppStore>{item?.name}</TextContentAppStore>
          </ItemListAppStore>
        ))}
      </ListAppStore>
    </Container>
  );
};
