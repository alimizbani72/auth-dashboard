import { redirect } from "next/navigation";
// ----------------------------------------------------------------------

export const metadata = {
  title: "ChainMind",
};

export default async function HomePage() {
  return redirect("/auth");
}
