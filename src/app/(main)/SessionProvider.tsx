"use client";

import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

interface SessionContextInterface {
  user: User;
  session: Session;
}

const SessionContext = createContext<SessionContextInterface | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContextInterface }>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be use within a Session Provider");
  }

  return context;
};
