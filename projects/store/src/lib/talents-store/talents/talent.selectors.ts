import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { TalentsState } from './talent.state';


const talentsFeatureSelector: MemoizedSelector<object, TalentsState> =
   createFeatureSelector<TalentsState>('talents');
                  
export const talentsSelector: MemoizedSelector<object, any[]> =
  createSelector(talentsFeatureSelector, ({ talents }) => talents);
                  