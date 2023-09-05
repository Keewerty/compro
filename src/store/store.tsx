import { createSignal } from 'solid-js';

// Create a store

export const [dataPreTrigger, setDataPreTrigger] = createSignal(false);
export const [dataStore, setDataStore] = createSignal('no_auth');
export const [dataStoreAuth, setDataStoreAuth] = createSignal('no_auth');
export const [dataPre, setDataPre] : any = createSignal();