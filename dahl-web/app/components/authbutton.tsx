"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button onClick={() => signIn("google")}> 
    <div className = "items-center text-xs">Sign-In <span aria-hidden="true">&rarr;</span></div> 
  </button>
  }

  return (
    <div>
      {session ? (
        <>
          <button onClick={() => signOut()}> 
            <div className = "items-center text-xs">Sign-Out <span aria-hidden="true">&rarr;</span></div> 
          </button>
        </>
      ) : (
        <>
          <button onClick={() => signIn("google")}> 
            <div className = "items-center text-xs">Sign-In <span aria-hidden="true">&rarr;</span></div> 
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButton;
