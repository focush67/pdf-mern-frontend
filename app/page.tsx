import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-400">
        Welcome to PDF Extractor
      </h1>
      <div className="flex justify-center space-x-4 mt-8">
        <Link href="/dashboard">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Dashboard
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
