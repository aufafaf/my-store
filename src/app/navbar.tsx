import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status }: { data: any; status: string } = useSession();

  function handleLogin() {
    signIn();
  }

  function handleLogout() {
    signOut();
  }

  return (
    <nav className="flex bg-gradient-to-r from-purple-600 to-blue-600 py-2 px-5 justify-between fixed top-0 left-0 w-full shadow z-50">
      <div className="text-white">Navbar</div>
      <div>
        {status === "authenticated" ? (
          <div className="flex justify-center items-center">
            <h4 className="text-white mr-3">{session?.user?.fullname}</h4>
            <button
              className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
