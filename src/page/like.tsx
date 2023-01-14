import { GAME_LIST_ITEM_DATA } from '../data/game-item/constant';
import { GameListContainer } from '../modules/game-list';
import { HeaderElem } from '../modules/header/Header';

export const Like: React.FC<{
  likes: GAME_LIST_ITEM_DATA[];
  items: GAME_LIST_ITEM_DATA[];
}> = ({ likes, items }) => {
  return (
    <div>
      <HeaderElem items={likes} />
      <GameListContainer items={likes} isLikeList={true} />
    </div>
  );
};
