import NavBar from "./componentes/navBar/navBar";
export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex ">
          <NavBar />
          <div className="p-2 w-full text-slate-900">{children}</div>
        </div>
      </div>
    </>
  );
}
