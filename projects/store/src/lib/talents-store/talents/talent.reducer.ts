import { Action, createReducer, on } from '@ngrx/store';
import { TalentsActions } from './talent.actions';
import { TalentsState } from './talent.state';

const reducer = createReducer(
    new TalentsState(),
    on(TalentsActions.GetTalentsSuccessAction, (state, { talents }) => ({ ...state, talents })),
    on(TalentsActions.AddTalentsSuccessAction, (state, { isAdded}) => ({ ...state, isAdded })),
  )

  export function TalentsReducer(state: TalentsState | undefined, action: Action) {
    return reducer(state, action);
  }
