import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {user ? (
          <div className="text-center -mt-24">
            <p className="mt-24 leading-[82px] text-7xl font-medium tracking-tight">
              All set!
            </p>
            <p className="text-2xl mt-9">Great - you’re registered</p>
            <p className="text-2xl mt-6">
              Meet us at the booth to compete in round 1
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-[180px] leading-[175px] tracking-tight font-medium">
              Kinde
              <br />
              Speedrun
            </h2>
            <p className="text-2xl text-black mt-16">
              Beat the fastest time and you could win an Exway Ripple electric
              skateboard
            </p>

            <p className="mt-24 leading-[82px] text-7xl font-medium tracking-tight">
              Register to get started
            </p>
            <div className="mt-12">
              <RegisterLink className="text-white font-medium bg-black hover:bg-slate-950 focus:outline-none focus:ring-4 h-12 focus:ring-slate-300 rounded-lg text-sm px-4 py-3 me-2 mb-2">
                Register
              </RegisterLink>
            </div>

            <hr className="mt-32" />

            <p className="mt-24 leading-[82px] text-7xl font-medium tracking-tight">
              Leaderboard
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
