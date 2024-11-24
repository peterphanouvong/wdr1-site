import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {user ? (
          <p className="text-xl text-gray-800 dark:text-gray-200">
            👋🏻 Hey {user.given_name}!
            <br />
            You are registered for the Web Directions 2024 Kinde competition.
          </p>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-800 dark:text-gray-200 mb-4">
              Register for the Web Directions 2024 Kinde competition.
            </p>
            <RegisterLink className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Register
            </RegisterLink>
          </div>
        )}
      </main>
    </div>
  );
}
