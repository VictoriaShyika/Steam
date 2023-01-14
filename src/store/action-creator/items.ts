import { GAME_LIST_ITEM_DATA } from './../../data/game-item/constant';
import { Dispatch } from 'redux';
import axios from 'axios';
import { API } from '../../modules/game-list/constant';
import { ItemsAction, ItemsActionTypes } from '../../data/items';
import { LikesAction, LikesActionTypes } from '../../data/likes';

export const fetchItems = () => {
  return async (dispatch: Dispatch<ItemsAction>) => {
    try {
      dispatch({ type: ItemsActionTypes.FETCH_ITEMS });
      const response = await axios({
        method: API.TYPE,
        url: API.URL,
        headers: API.HEADERS,
      });
      setTimeout(() => {
        dispatch({
          type: ItemsActionTypes.FETCH_ITEMS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: ItemsActionTypes.FETCH_ITEMS_ERROR,
        payload: 'Error',
      });
    }
  };
};

export const sortingItems =
  (array: any[], sort: 'price' | 'date', order: 'BtL' | 'LtB' = 'BtL') =>
  (dispatch: Dispatch<ItemsAction>) => {
    const types = {
      price: 'price',
      date: 'released',
    };
    const sortProperty = types[sort];
    if (sort == 'price') {
      if (order == 'LtB') {
        const sorted = array.sort(
          (a: any, b: any) =>
            // @ts-ignore
            (parseFloat(a[sortProperty].replace('€', '').replace(',', '.')) ||
              0) -
            // @ts-ignore
            (parseFloat(b[sortProperty].replace('€', '').replace(',', '.')) ||
              0),
        );

        dispatch({
          type: ItemsActionTypes.SORTING_PRICE_BtL,
          payload: sorted,
        });
      } else if (order == 'BtL') {
        const sorted = array.sort(
          (a: any, b: any) =>
            // @ts-ignore
            (parseFloat(b[sortProperty].replace('€', '').replace(',', '.')) ||
              0) -
            // @ts-ignore
            (parseFloat(a[sortProperty].replace('€', '').replace(',', '.')) ||
              0),
        );
        dispatch({
          type: ItemsActionTypes.SORTING_PRICE_LtB,
          payload: sorted,
        });
      }
    } else if (sort == 'date') {
      if (order == 'LtB') {
        const sorted = array.sort(
          (a: any, b: any) =>
            // @ts-ignore
            (new Date(a[sortProperty]).getTime() || +Infinity) -
            // @ts-ignore
            (new Date(b[sortProperty]).getTime() || +Infinity),
        );
        dispatch({
          type: ItemsActionTypes.SORTING_DATE_BtL,
          payload: sorted,
        });
      } else if (order == 'BtL') {
        const sorted = array.sort(
          (a: any, b: any) =>
            // @ts-ignore
            (new Date(b[sortProperty]).getTime() || +Infinity) -
            // @ts-ignore
            (new Date(a[sortProperty]).getTime() || +Infinity),
        );
        dispatch({
          type: ItemsActionTypes.SORTING_PRICE_LtB,
          payload: sorted,
        });
      }
    }
  };
export const searchItems =
  (searchParam: any, q: any) => async (dispatch: Dispatch<ItemsAction>) => {
    const response = await axios({
      method: API.TYPE,
      url: API.URL,
      headers: API.HEADERS,
    });
    function search(items: any) {
      return items.filter((item: any) => {
        return searchParam.some((newItem: any) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      });
    }

    setTimeout(() => {
      dispatch({
        type: ItemsActionTypes.SORTING_PRICE_LtB,
        payload: search(response.data),
      });
    }, 100);
  };

export const likeList =
  (items: any, likes: any, id: any) => (dispatch: Dispatch<LikesAction>) => {
    if (!likes.some((item: any) => item.appId === id)) {
      let data = items.filter((item: any) => item.appId == id)[0];
      window.localStorage.setItem(
        'MY_APP_STATE',
        JSON.stringify([data, ...likes]),
      );

      dispatch({
        type: LikesActionTypes.ADD_LIKE,
        payload: [data, ...likes],
      });
    } else {
      let data = likes.findIndex(
        (obj: GAME_LIST_ITEM_DATA) => obj.appId === id,
      );
      likes.splice(data, 1);
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(likes));
      dispatch({
        type: LikesActionTypes.REMOVE_LIKE,
        payload: likes,
      });
    }
  };
