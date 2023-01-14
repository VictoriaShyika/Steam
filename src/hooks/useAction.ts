import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useTypedSelector';
import * as ItemActionCreators from '../store/action-creator/items';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ItemActionCreators, dispatch);
};
