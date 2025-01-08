"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button onClick={() => signIn("google")}> 
            <div className = "rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow">Login <span aria-hidden="true"></span></div> 
           </button>
  }

  return (
    <div>
      {session ? (
        <>
          <button onClick={() => signOut()}> 
            <div className = "rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow">Logout <span aria-hidden="true"></span></div> 
          </button>
        </>
      ) : (
        <>
          <button onClick={() => signIn("google")}> 
            <div className = "rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow">Login <span aria-hidden="true"></span></div> 
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButton;
