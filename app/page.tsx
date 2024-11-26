import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Leaderboard } from "./leaderboard";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="pb-32">
      <main className="mt-36">
        {!!user ? (
          <div className="text-center">
            <p className="mt-24 leading-[82px] lg:text-7xl text-5xl font-medium tracking-tight">
              All set!
            </p>
            <p className="lg:text-2xl mt-4 lg:mt-9">
              Great - you’re registered
            </p>
            <p className="lg:text-2xl mt-3 lg:mt-6">
              Meet us at the booth to compete in round 1
            </p>
          </div>
        ) : (
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-7xl sm:text-[120px] md:text-[150px] lg:text-[180px] lg:leading-[175px] md:leading-[140px] sm:leading-[110px] leading-[70px] tracking-tight font-medium">
              Kinde
              <br />
              Speedrun
            </h2>
            <p className="sm:text-2xl text-black mt-8 sm:mt-12 lg:mt-16">
              Beat the fastest time and you could win an Exway Ripple electric
              skateboard
            </p>

            <p className="mt-12 sm:mt-16 lg:mt-24 leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              Register to get started
            </p>
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <Button asChild>
                <RegisterLink>Register</RegisterLink>
              </Button>
            </div>

            <hr className="mt-16 sm:mt-24 lg:mt-32" />

            <h2 className="mt-16 sm:mt-20 lg:mt-24 leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 lg:mb-12">
              Leaderboard
            </h2>

            <div>
              <Leaderboard />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
