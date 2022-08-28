import { createEntityAdapter,EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { SandboxActions } from "./actions.type";

export interface SandboxState  extends EntityState<any> {
    loading: boolean;
}

export const adapter = createEntityAdapter<any>({
    selectId: (element : any) => element.position
});

export const initialSandboxState: SandboxState = adapter.getInitialState({
    loading: false
});

export const sandboxReducer = createReducer(
    initialSandboxState,
    on(SandboxActions.loadElements, (state, action) => adapter.setAll(action.elements, {...state, loading: true})),
)

export const  { selectAll, selectEntities,selectTotal, selectIds } = adapter.getSelectors();