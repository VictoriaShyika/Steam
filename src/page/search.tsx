import styled from 'styled-components';
import { TextElem } from '../components/text';
import { GAME_LIST_ITEM_DATA } from '../data/game-item/constant';
import { GameListContainer } from '../modules/game-list';
import { HeaderElem } from '../modules/header/Header';

export const Search: React.FC<{
  items: GAME_LIST_ITEM_DATA[];
  loading: boolean;
}> = ({ items, loading }) => {
  return (
    <SearchContainer>
      <HeaderElem items={items} />
      {loading && (
        <Container>
          <TextElem size="title" tid="Loading..." />
        </Container>
      )}
      {!loading && <GameListContainer items={items} />}
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  width: 100%;
`;
const Container = styled.div`
  padding: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
`;
