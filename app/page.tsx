import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/");
  return <div>Hello</div>;
};

export default page;
