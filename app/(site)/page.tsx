import Image from "next/image";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import getSongs from "@/actions/getSongs";
import PageContent from "@/components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
          <h1 className="text-white text-2xl font-semibold">
            PLEASE DO NOT LOGIN WITH YOUR ACCOUNT YOU CANNOT DELETE IT! THIS
            WILL BE FIXED SOON BUT YOU HAVE BEEN WARNED!
          </h1>
          <div className="grid  sm:grid-cols-2 xlgrid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              name="Liked Songs"
              href="liked"
              image="/images/liked.png"
            ></ListItem>
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
