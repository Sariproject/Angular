import { Action, createReducer, on } from '@ngrx/store';
import { ActivityActions } from './activity.actions';
import { ActivityState} from './activity.state';

const reducer = createReducer(
    new ActivityState(),
    on(ActivityActions.GetActivitySuccessAction, (state, { Activity }) => ({ ...state, Activity })),
    on(ActivityActions.AddActivitySuccessAction, (state, { isAdded }) => ({ ...state, isAdded })),
  )

  export function ActivityReducer(state: ActivityState | undefined, action: Action) {
    return reducer(state, action);
  }
