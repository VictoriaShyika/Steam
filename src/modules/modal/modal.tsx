import styled, { css } from 'styled-components';
import { TextElem } from '../../components/text';
import { GAME_ITEM_DATA } from '../../data/game-detail/constant';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';

export const Modal: React.FC<{
  setIsOpen?: any;
  data: GAME_ITEM_DATA;
  loading: boolean;
}> = ({ setIsOpen, data, loading }) => {
  return (
    <>
      <DarkBG onClick={() => setIsOpen(false)} />
      <Centered>
        {loading && (
          <Container>
            <TextElem size="title" tid="Loading..." />
          </Container>
        )}
        {!loading && (
          <ModalContainer>
            <Image img={data.imgUrl} />
            <Content>
              <Header>
                <TextElem color="default" size="title" tid={data.title} />
              </Header>
              <TextElem tid={data.description} />
              <TextElem tid={data.developer.name} />
              <Footer>
                <TextElem tid={data.publisher.name} />
              </Footer>
            </Content>
          </ModalContainer>
        )}
      </Centered>
    </>
  );
};
const Header = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  background: #17323a;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
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
  height: 450px;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: end;
`;
const Container = styled.div`
  padding: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
`;
