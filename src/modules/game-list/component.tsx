import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardElem } from '../../components/card';
import { GAME_LIST_ITEM_DATA } from '../../data/game-item/constant';
import { useActions } from '../../hooks/useAction';
import { Modal } from '../modal/modal';
import { API } from './constant';
import ReactPaginate from 'react-paginate';
import leftIcon from '../../assets/icon/left.svg';
import rightIcon from '../../assets/icon/right.svg';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Component: React.FC<{
  items: GAME_LIST_ITEM_DATA[];
  isLikeList?: boolean;
}> = ({ items, isLikeList = false }) => {
  const { likeList } = useActions();
  const likedGames = useTypedSelector((state) => state.likes.likes);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<any>('');
  const [itemOffset, setItemOffset] = useState(0);
  const [storedList, setStoredList] = useState([]);

  const onClick = (id: string) => {
    likeList(items, likedGames, id);
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setStoredList(JSON.parse(data));
  };

  const showDetails = (id: string | undefined, event: any) => {
    setIsOpen(true);
    setLoading(true);
    axios({
      method: API.TYPE,
      url: `https://steam2.p.rapidapi.com/appDetail/${id}`,
      headers: API.HEADERS,
    }).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setStoredList(JSON.parse(data));
  }, []);

  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = isLikeList
    ? storedList
    : items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <CardContainer>
        {currentItems.map((item: GAME_LIST_ITEM_DATA) => (
          <div key={item.appId}>
            <CardElem
              showDetails={showDetails}
              appId={item.appId}
              title={item.title}
              url={item.url}
              released={item.released}
              imgUrl={item.imgUrl}
              price={item.price}
              onClick={onClick}
              isliked={storedList.some((i: any) => i.appId === item.appId)}
            />
          </div>
        ))}
      </CardContainer>
      <Content>
        <Paginate
          nextLabel={<img src={rightIcon} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<img src={leftIcon} />}
          renderOnZeroPageCount={undefined}
        />
      </Content>

      {isOpen && data && (
        <Content>
          <Modal data={data} setIsOpen={setIsOpen} loading={loading} />
        </Content>
      )}
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
`;
const CardContainer = styled.div`
  padding: 57px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
const Paginate = styled(ReactPaginate)`
  color: white;
  list-style: none;
  display: flex;
  gap: 8px;
  padding-bottom: 30px;

  li {
    a {
      background-color: ${COLOR_DATA[COLOR_ENUM.INPUT]};
      border-radius: 50%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .selected {
    a {
      background-color: #17323a;
    }
  }
`;
