import { Store, StoreModule } from "@ngrx/store";
import { loadingReducer } from "./loading/lodaing.reducers";

export const AppStoreModule =[
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", loadingReducer)
]