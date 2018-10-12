import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getCurrentUser = createSelector(getUserFeatureState, state => state.currentUser);

export const getMaskPassword = createSelector(getUserFeatureState, state => state.maskPassword);
