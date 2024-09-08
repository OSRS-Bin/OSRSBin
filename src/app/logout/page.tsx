import { redirect } from "next/navigation";

export default function Logout() {
  // do actual logging out
  
  redirect("/");
}
