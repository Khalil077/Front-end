import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-white rounded-md p-2">
          <Image src="/logos/logo.svg" alt="Logo" width={40} height={40} />
        </div>

        <h2 className="text-xl font-bold">RHpro</h2>
      </div>
      <nav className="space-y-3">
        <a className="block p-2 rounded bg-blue-100 text-blue-600">Dashboard</a>
        <a className="block p-2 hover:bg-gray-100">Timesheets</a>
        <a className="block p-2 hover:bg-gray-100">Requests</a>
        <a className="block p-2 hover:bg-gray-100">Projects</a>
        <a className="block p-2 hover:bg-gray-100">Dossier</a>
        <a className="block p-2 hover:bg-gray-100">Notifications</a>
      </nav>
    </aside>
  );
}
