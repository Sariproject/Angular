import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { StudentsState } from './students.state';


const StudentsFeatureSelector: MemoizedSelector<object, StudentsState> =
   createFeatureSelector<StudentsState>('Students');
                  
export const StudentsSelector: MemoizedSelector<object, any[]> =
  createSelector(StudentsFeatureSelector, ({  Students }) =>  Students);
                  