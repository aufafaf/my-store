import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-7xl">404</h1>
      <h2 className="text-xl">Page Not Found</h2> <br />
      <Link href={"/"} className=" bg-gray-800 text-white p-3 rounded-md">
        Back to Home
      </Link>
    </div>
  );
}
