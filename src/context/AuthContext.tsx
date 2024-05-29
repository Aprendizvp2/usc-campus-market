import { createContext, useState, ReactNode, useEffect } from "react";
import { supabase } from "../createClient";
import { Session } from "@supabase/supabase-js";

export interface IAuthContextEntity {
  session: Session | null;
  handleSignIn: (email: string, password: string) => Promise<string>;
  handleSignUp: (
    email: string,
    password: string,
    username: string,
    idNumber: string,
    role: string
  ) => Promise<string>;
  handleSignOut: () => void;
}

export const AuthContext = createContext<undefined | IAuthContextEntity>(
  undefined
);
interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);

  const handleSignIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return error.message;
    }

    setSession(data.session);

    return "";
  };

  const handleSignUp = async (
    email: string,
    password: string,
    username: string,
    idNumber: string,
    role: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          idNumber,
          role,
        },
      },
    });

    if (error) {
      return error.message;
    }

    setSession(data.session);

    return "";
  };

  const handleSignOut = () => {
    supabase.auth.signOut();
    setSession(null);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
      } else {
        setSession(null);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        handleSignIn,
        handleSignUp,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
