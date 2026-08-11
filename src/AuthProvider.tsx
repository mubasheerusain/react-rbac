import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { getUser, login, User } from "./auth";

type AuthContext = {
    authToken?: string | null;
    currentUser?: User | null;
    handleLogin: () => Promise<void>;
    handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderChildren = PropsWithChildren;

export const AuthProvider = ({children}: AuthProviderChildren) => {
    const [authToken, setAuthToken] = useState<string | null>();
    const [currentUser, setCurrentUser] = useState<User | null>();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUser();
                const { token, currentUser } = response[1] as any;
                setAuthToken(token);
                setCurrentUser(currentUser);
            }
            catch (e) {
                setAuthToken(null);
                setCurrentUser(null);
            }
        }
        fetchUser();
    }, []);

    const handleLogin = async () => {
        try {
            const response = await login();
            const { token, currentUser } = response[1] as any;
            setAuthToken(token);
            setCurrentUser(currentUser);
        }
        catch (e) {
            setAuthToken(null);
            setCurrentUser(null);
        }
    }

    const handleLogout = async () => {
        setAuthToken(null);
        setCurrentUser(null);
    }

    return (<AuthContext.Provider value={{
        authToken,
        currentUser,
        handleLogin,
        handleLogout
    }}>{ children }</AuthContext.Provider>)
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined) {
        throw new Error("Please use useAuth within the provider")
    }

    return context;
}