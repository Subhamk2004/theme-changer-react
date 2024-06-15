// Now this is just like we are creating a useContext file in which we were
// using React.createContext,
// but in this file first we are importing createContext and then using it

// just like there were two methods to create router, here we have two
// methods to create context,

// first one we have seen in miniContext file, and this is the second method

// we can also give initial values to the createContext, which have the
// initial value or variables when the context is created

import {createContext, useContext} from "react";

export let ThemeContext = createContext({
    themeMode: 'light',
    darkThemeMode: () => {},
    lightThemeMode: () => {}
});

// in the previous method we were passing the [user, setUser] to the context in
// the userContextProvider file,
// here we are giving some default values to the context

// in previous method we were making another UserContextProvider file to
// wrap the children, but here we are doing that same thing here in the same
// file
// as below

export const ThemeProvider = ThemeContext.Provider

// export const ThemeProvider = ThemeContext.Provider: This creates a component
// called ThemeProvider that serves as a context provider. It wraps the child
// components (specified in its children prop) and makes the context value
// accessible to them.

export default function useTheme() {
    return useContext(ThemeContext);
}
//return useContext(ThemeContext);: Inside the hook, useContext is used to
// retrieve the current value of the ThemeContext. This allows components using
// this hook to access the context's information (like themeMode) without prop drilling.

// in previous method this ThemeProvider was UserContextProvider, in which
// we have UserContext.Provider and then in that we were passing the
// children here we are directly doing that
//as below