import { ItemsState, ItemsAction, ItemsActionTypes } from '../../data/items';

const initialState: ItemsState = { items: [], loading: false, error: null };

export const itemsReducer = (
  state = initialState,
  action: ItemsAction,
): ItemsState => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS:
      return { loading: true, error: null, items: [] };

    case ItemsActionTypes.FETCH_ITEMS_SUCCESS:
      return { loading: false, error: null, items: action.payload };

    case ItemsActionTypes.SORTING_DATE_BtL:
      return { loading: false, error: null, items: action.payload };

    case ItemsActionTypes.SORTING_DATE_LtB:
      return { loading: false, error: null, items: action.payload };

    case ItemsActionTypes.SORTING_PRICE_BtL:
      return { loading: false, error: null, items: action.payload };

    case ItemsActionTypes.SORTING_PRICE_LtB:
      return { loading: false, error: null, items: action.payload };

    case ItemsActionTypes.SEARCH_ITEMS:
      return { loading: false, error: null, items: action.payload };

    case ItemsActionTypes.FETCH_ITEMS_ERROR:
      return { loading: false, error: action.payload, items: [] };

    default:
      return state;
  }
};
