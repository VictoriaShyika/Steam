import { GAME_LIST_ITEM_DATA } from './game-item/constant';

export interface LikesState {
  likes: GAME_LIST_ITEM_DATA[] | [];
}
export enum LikesActionTypes {
  ADD_LIKE = 'ADD_LIKE',
  REMOVE_LIKE = 'REMOVE_LIKE',
}

interface AddLikeAction {
  type: LikesActionTypes.REMOVE_LIKE;
  payload: any[];
}
interface RemoveLikeAction {
  type: LikesActionTypes.ADD_LIKE;
  payload: any[];
}

export type LikesAction = AddLikeAction | RemoveLikeAction;
