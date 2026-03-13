export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white p-5 border-b">
      <h1 className="text-lg font-semibold">Dashboard Overview</h1>

      <div className="flex items-center gap-4">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
          Role: Collaborator
        </span>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-400 rounded-full flex items-center justify-center text-white">
            A
          </div>

          <div className="text-sm">
            <p className="font-semibold">Alex Rivera</p>
            <p className="text-gray-500">Senior Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
