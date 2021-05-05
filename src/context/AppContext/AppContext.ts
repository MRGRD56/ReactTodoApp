import * as React from "react";
import IAppContextValue from "./IAppContextValue";

const Context = React.createContext<IAppContextValue | null>(null);

export default Context;
