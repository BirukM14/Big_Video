// /app/dashboard/page.tsx
import UserInfo from "./UserInfo";
import VideoStats from "./Videostats";
import RecentUploads from "./RecentUploads";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex justify-between p-6 text-white">

<div className="text-white max-w-2xl mx-auto px-4 text-justify leading-relaxed">
  <h2 className="text-2xl font-bold mb-4">What is Lorem Ipsum?</h2>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
    of Lorem Ipsum.
  </p>
</div>


      <div className="grid grid-cols-2 gap-4 p-8  justify-center p-8">
      <Image
        src="/kes.jpg"
        alt="Hero Image"
        width={300}
        height={70}
        className="rounded-lg mb-4"
      />
      
      <Image
        src="/bura.jpg"
        alt="Hero Image"
        width={300}
        height={70}
        className="rounded-lg mb-4"
      />
     
      <Image
        src="/images.jpeg"
        alt="Hero Image"
        width={300}
        height={70}
        className="rounded-lg mb-4"
      />
      <Image
        src="/kes.jpg"
        alt="Hero Image"
        width={300}
        height={70}
        className="rounded-lg mb-4"
      />
      </div>
     
      <VideoStats />
      <RecentUploads />
        <UserInfo />
    </div>
  );
}
