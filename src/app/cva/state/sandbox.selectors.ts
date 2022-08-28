import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SandboxState } from "./sandbox.reducer";
import * as fromSandbox from './sandbox.reducer';

export const selectSandboxState = createFeatureSelector<SandboxState>('sandbox');

export const selectElements = createSelector(
    selectSandboxState,
    fromSandbox.selectAll
  );

export const selectElementById = (id: string) => createSelector(
    selectElements,
    (elements) => elements.find(element => element.id === id)
) 
export const isStateLoading = createSelector(
    selectSandboxState,
    state => state.loading
)