import { Clock, FileText, FolderKanban, ClipboardList } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Alex!</h1>
        <p className="text-gray-500 text-sm">
          Here is what's happening with your projects today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
            <Clock size={18} className="text-blue-600" />
          </div>

          <p className="text-sm text-gray-500">Weekly Hours</p>
          <h2 className="text-2xl font-bold">38h</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
            <FileText size={18} className="text-green-600" />
          </div>
          <p className="text-sm text-gray-500">Timesheet Status</p>
          <h2 className="text-2xl font-bold">DRAFT</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-lg">
            <FolderKanban size={18} className="text-yellow-600" />
          </div>
          <p className="text-sm text-gray-500">Pending Requests</p>
          <h2 className="text-2xl font-bold">2</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg">
            <ClipboardList size={18} className="text-purple-600" />
          </div>
          <p className="text-sm text-gray-500">Active Projects</p>
          <h2 className="text-2xl font-bold">3</h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Recent Activity</h3>
            <button className="text-blue-500 text-sm">View all</button>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Holiday Request Approved</p>
                <p className="text-gray-500">
                  Your request for Oct 24 - Oct 28 has been approved.
                </p>
              </div>
              <span className="text-gray-400">2h ago</span>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium">New Project Assigned</p>
                <p className="text-gray-500">
                  You've been added to the Horizon UI Redesign project.
                </p>
              </div>
              <span className="text-gray-400">5h ago</span>
            </div>
          </div>
        </div>

        {/* Assigned Projects */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Assigned Projects</h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm">Horizon UI Redesign</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded w-[75%]" />
              </div>
            </div>

            <div>
              <p className="text-sm">Client Portal Launch</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded w-[40%]" />
              </div>
            </div>

            <div>
              <p className="text-sm">Mobile App V2</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded w-[90%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
