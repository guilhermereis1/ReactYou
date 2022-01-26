import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  overflow: auto;
`;

export const ItemList = styled.li`
  width: 270px;
  height: 249px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 1.5rem;
  background-color: rgb(49, 49, 53);
  border-radius: 16px;
  border: 1px solid transparent;
  margin-right: 10px;
`;

export const ItemImage = styled.img`
  width: 50%;
  height: 36px;
  margin-bottom: 1.5rem;
`;

export const Link = styled.div`
  margin-bottom: 0.25rem;
  color: rgb(199, 199, 204);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-size: 0.75rem;
`;

export const TextContent = styled.p`
  color: rgb(248, 248, 248);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0.5rem;
  flex: 1 1 0%;
`;

export const PostedAt = styled.div`
  font-size: 0.75rem;
  color: rgb(174, 174, 178);
`;

export const PostedAtSpan = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding-right: 0.25rem;
`;

export const ListAppStore = styled.ul`
  list-style: none;
  display: flex;
  overflow: auto;
`;

export const ItemListAppStore = styled.li`
  max-width: 120px;
  height: 120px;
  background: rgb(60, 60, 62);
  list-style: none;
  margin-right: 0.5rem;
  border-radius: 16px;
  flex: 1 0 120px;
  text-align: center;
  cursor: pointer;
  pointer-events: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0px, 1fr) 16px;
  padding: 0.8rem;
`;

export const ItemImageAppStore = styled.img`
  width: 100%;
  padding: 0px 0.7em;
`;

export const TextContentAppStore = styled.div`
  color: rgb(248, 248, 248);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4;
  white-space: nowrap;
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
