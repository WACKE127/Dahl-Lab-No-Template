"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button onClick={() => signIn("google")}> 
    <div className = "items-center">Sign in <span aria-hidden="true"></span></div> 
  </button>
  }

  return (
    <div>
      {session ? (
        <>
          <button onClick={() => signOut()}> 
            <div className = "items-center">Sign out <span aria-hidden="true"></span></div> 
          </button>
        </>
      ) : (
        <>
          <button onClick={() => signIn("google")}> 
            <div className = "items-center">Sign in <span aria-hidden="true"></span></div> 
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButton;
