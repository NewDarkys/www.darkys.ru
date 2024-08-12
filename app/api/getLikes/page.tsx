"use server";
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const gameId = searchParams["gameId"] ?? "1";
  if (gameId != "1") {
    const targetRobloxAPI =
      "https://games.roblox.com/v1/games/votes?universeIds=";
    const res = await fetch(targetRobloxAPI + gameId);
    const json = await res.json();
    return <>{json.data[0].upVotes}</>;
  } else {
    return <>gameId can't be none</>;
  }
}
