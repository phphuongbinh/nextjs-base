import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-red-500">Home Page</h1>
      <Link href={"/"}>home</Link>
      <Link
        href={{
          pathname: "/property/[slug]",
          query: {
            slug: "city-land",
          },
        }}
      >
        Property Link
      </Link>
    </div>
  );
}
