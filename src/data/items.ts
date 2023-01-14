import { GAME_LIST_ITEM_DATA } from './game-item/constant';

export interface ItemsState {
  items: GAME_LIST_ITEM_DATA[] | [];
  loading: boolean;
  error: null | string;
}
export enum ItemsActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
  SORTING_PRICE_BtL = 'SORTING_PRICE_BtL',
  SORTING_PRICE_LtB = 'SORTING_PRICE_LtB',
  SORTING_DATE_BtL = 'SORTING_DATE_BtL',
  SORTING_DATE_LtB = 'SORTING_DATE_LtB',
  SEARCH_ITEMS = 'SEARCH_ITEMS',
}

interface FetchItemsAction {
  type: ItemsActionTypes.FETCH_ITEMS;
}
interface FetchItemsSuccessAction {
  type: ItemsActionTypes.FETCH_ITEMS_SUCCESS;
  payload: any[];
}
interface FetchItemsErrorAction {
  type: ItemsActionTypes.FETCH_ITEMS_ERROR;
  payload: string;
}
interface SortingPriceBtLAction {
  type: ItemsActionTypes.SORTING_PRICE_BtL;
  payload: any[];
}
interface SortingPriceLtBAction {
  type: ItemsActionTypes.SORTING_PRICE_LtB;
  payload: any[];
}
interface SortingDateBtLAction {
  type: ItemsActionTypes.SORTING_DATE_BtL;
  payload: any[];
}
interface SortingDateLtBAction {
  type: ItemsActionTypes.SORTING_DATE_LtB;
  payload: any[];
}
interface SearchItemsAction {
  type: ItemsActionTypes.SEARCH_ITEMS;
  payload: any[];
}

export type ItemsAction =
  | FetchItemsAction
  | FetchItemsSuccessAction
  | FetchItemsErrorAction
  | SortingPriceBtLAction
  | SortingPriceLtBAction
  | SortingDateBtLAction
  | SortingDateLtBAction
  | SearchItemsAction;
