import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder | 7EYES",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
