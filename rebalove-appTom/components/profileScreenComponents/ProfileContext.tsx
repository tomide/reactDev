import * as React from 'react';


export interface IAppContextInterface {
  location: string,
  imgl : Array<{key: string, value: string}> | []
}


const ctxt = React.createContext<IAppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
  
export const AppContextConsumer = ctxt.Consumer;