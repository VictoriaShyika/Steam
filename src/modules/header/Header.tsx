import styled from 'styled-components';
import { NavElem } from '../../components/nav-bar';
import { OrderElem } from '../../components/order';
import { SearchElem } from '../../components/search';
import { Select } from '../select';
import logoIcon from '../../assets/icon/logo.svg';
import { useState, useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { GAME_LIST_ITEM_DATA } from '../../data/game-item/constant';

export const HeaderElem: React.FC<{ items: GAME_LIST_ITEM_DATA[] }> = ({
  items,
}) => {
  const [q, setQ] = useState<string>('');
  const [order, setOrder] = useState<'BtL' | 'LtB'>('BtL');
  const [sort, setSort] = useState<'price' | 'date'>('price');
  const { fetchItems, sortingItems, searchItems } = useActions();

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    sortingItems(items, sort, order);
  }, [sort, order]);

  useEffect(() => {
    searchItems(['title'], q);
  }, [q]);

  return (
    <div>
      <Header>
        <SearchContainer>
          <Img src={logoIcon} />
          <SearchElem
            placeholder="HEADER.SEARCH.PLACEHOLDER"
            value={q}
            onChange={(e: any) => setQ(e.target.value)}
          />
        </SearchContainer>
        <OrderElem setOrder={setOrder} />
        <Select onChange={(e: any) => setSort(e.value)} />
        <NavElem />
      </Header>
      {/* 
      <MobileHeader>
        <LogoContainer>
          <Img src={logoIcon} />
          <NavElem />
        </LogoContainer>
        <SearchElem
          placeholder="HEADER.SEARCH.PLACEHOLDER"
          value={q}
          onChange={(e: any) => setQ(e.target.value)}
        />
        <LogoContainer>
          <OrderElem setOrder={setOrder} />
          <Select onChange={(e: any) => setSort(e.value)} />
        </LogoContainer>
      </MobileHeader> */}
    </div>
  );
};
const SearchContainer = styled.div`
  display: flex;
`;
const Img = styled.img``;

const Header = styled.div`
  padding: 32px 16px 0;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  gap: 11px;
  grid-template-columns: 4fr auto 1fr auto;
  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  padding: 32px 16px 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 801px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
