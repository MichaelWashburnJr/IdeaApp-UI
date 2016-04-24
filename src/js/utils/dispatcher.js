'use es6';
import {DispatcherInstance} from 'general-store';

export default {
  dispatch(actionType, data) {
    return DispatcherInstance.get().dispatch({
      actionType: actionType,
      data: data
    });
  }
}
