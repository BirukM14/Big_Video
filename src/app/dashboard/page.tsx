// /app/dashboard/page.tsx
import UserInfo from "./UserInfo";
import VideoStats from "./Videostats";
import RecentUploads from "./RecentUploads";

export default function DashboardPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <VideoStats />
      <RecentUploads />
        <UserInfo />
    </div>
  );
}
