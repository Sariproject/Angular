import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { ActivityState } from './activity.state';


const ActivityFeatureSelector: MemoizedSelector<object, ActivityState> =
   createFeatureSelector<ActivityState>('Activity');
                  
export const ActivitySelector: MemoizedSelector<object, any[]> =
  createSelector(ActivityFeatureSelector, ({  Activity }) =>  Activity);
                  