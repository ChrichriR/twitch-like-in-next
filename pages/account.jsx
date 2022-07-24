/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Account = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
        <h2 className="text-2xl font-bold m-auto">
          Welcome, {session.user.name}
        </h2>
        <p className="py-4 m-auto">Signed in as {session.user.email}</p>
        <div className="pb-4 m-auto">
          <Image
            src={session.user.image}
            alt="my picture"
            width="100"
            height="100"
            className="rounded-full"
          />
        </div>
        <button
          className="flex
         items-center justify-center p-3 bg-gray-600 border border-gray-600"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="pt-[100px] flex flex-col  m-w-[400px] w-full mx-auto p-4">
      <h2 className="text-3xl font-bold m-auto">Login</h2>
      <p className="py-4 m-auto">
        Choose the account you want to sign in with.
      </p>
      <button
        className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2 w-[50vw] mx-auto"
        onClick={() => signIn()}
      >
        <FaGithub className="mr-2" />
        Sign in <span className="font-bold pl-1">Github</span>
      </button>
      <button
        className="flex items-center justify-center p-3 bg-blue-600 border border-gray-600 my-2 w-[50vw] mx-auto"
        onClick={() => signIn()}
      >
        <FaGithub className="mr-2" />
        Sign in <span className="font-bold pl-1">Google</span>
      </button>
    </div>
  );
};

export default Account;
