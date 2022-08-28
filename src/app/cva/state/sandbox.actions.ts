import { createAction, props } from "@ngrx/store";
console.trace()
export const loadElements = createAction('[Sandbox] Load Elements', props<{ elements: any[]}>());
export const allElementLoaded = createAction('[Sandbox] All Element Loaded', props<{ elements: any[], loading : false }>());