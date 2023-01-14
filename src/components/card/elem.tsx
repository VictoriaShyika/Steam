import React from 'react';
import styled, { css } from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { TextElem } from '../text';
import likeIcon from '../../assets/icon/heart.svg';
import likedIcon from '../../assets/icon/liked.svg';
import playIcon from '../../assets/icon/play.svg';

export const Elem: React.FC<{
  title?: string;
  url?: string;
  imgUrl?: string;
  appId?: string;
  released?: string;
  price?: string;
  onClick: Function;
  isliked?: boolean;
  showDetails: Function;
}> = ({
  title,
  url,
  imgUrl,
  appId,
  released,
  price,
  onClick,
  isliked,
  showDetails,
}) => {
  const handleClick = (id: string | undefined) => {
    onClick(id);
  };

  return (
    <CardContainer>
      <Card
        onClick={(e) => {
          showDetails(appId, e);
        }}
      >
        <Image img={imgUrl} />
        <Content>
          <TextElem size="title" tid={title} />
          <TextElem tid={released} />
          <TextElem tid={price} />

          {isliked && (
            <Play>
              <Icon src={playIcon} />
            </Play>
          )}
        </Content>
      </Card>
      {isliked ? (
        <Liked src={likedIcon} onClick={() => handleClick(appId)} />
      ) : (
        <Like src={likeIcon} onClick={() => handleClick(appId)} />
      )}
    </CardContainer>
  );
};

const Card = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 199px;
  box-sizing: border-box;
  min-width: 253px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  background-color: #17323a;
`;
const Image = styled.div<{ img: string | undefined }>`
  background: transparent no-repeat center;
  background-size: cover;
  ${({ img }) =>
    img &&
    css`
      background-image: url(${img});
    `}

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  min-height: 99px;
  max-height: 101px;
`;
const Content = styled.div`
  width: 60%;
  padding: 8px 11px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const CardContainer = styled.div`
  position: relative;
`;
const Play = styled.div`
  position: absolute;
  right: 20%;
  top: 40%;
`;
const Like = styled.img`
  position: absolute;
  right: 9px;
  bottom: 7px;
`;
const Liked = styled.img`
  position: absolute;
  right: 5px;
  bottom: 3px;
`;
const Icon = styled.img``;
