import { Action, createReducer, on } from '@ngrx/store';
import { StudentsActions } from './students.actions';
import { StudentsState} from './students.state';

const reducer = createReducer(
    new StudentsState(),
   
  )

  export function StudentsReducer(state: StudentsState | undefined, action: Action) {
    return reducer(state, action);
  }
