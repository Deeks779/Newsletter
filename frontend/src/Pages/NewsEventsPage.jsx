import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { Search,ChevronLeft, ChevronRight } from "lucide-react";
import ZoomImage from "../Component/ZoomImage";
import quarterImg from "/src/assets/image/quarter2.png";
import quarterImg2 from "/src/assets/image/quater1.png";
import circleHalf from "/src/assets/image/semiHalf.png";

import { useRef } from "react";
import { featuredNews, latestNews } from "../assets/SampleInformation";

function NewsCard({ img, title, meta }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="p-0">
        <ZoomImage src={img} className="rounded-t-2xl" />
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-500 mb-1">{meta}</p>
        <h3 className="font-semibold">{title}</h3>
      </CardBody>
    </Card>
  );
}

function NewsListItem({ days, title }) {
  return (
    <div className="flex gap-4 pb-4 border-b border-gray-200">
      <ZoomImage
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        className="w-20 h-16 rounded-lg object-cover"
      />
      <div>
        <p className="text-sm text-gray-500">{days} days ago</p>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
}

export default function NewsEventsPage() {
  const featuredRef = useRef(null);
  return (
    <div className="min-h-screen">

      <section className="relative bg-[#0b1f36] text-white py-16 px-6 overflow-hidden">
        <img src={quarterImg2} className="absolute top-0 left-0 w-80 h-80" />
        <img src={quarterImg} className="absolute bottom-0 right-0 w-80 h-80" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-semibold">News & Events</h1>
          <p className="text-gray-300 max-w-xl">
            Explore company updates, announcements, and upcoming events.
          </p>

          <Input
            placeholder="Search news or events..."
            startContent={<Search size={18} />}
            className="max-w-xl"
          />
        </div>
      </section>
      {/* FEATURED NEWS (SCROLL)*/}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Featured News</h2>

            {/* Scroll Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() =>
                  featuredRef.current.scrollBy({ left: -350, behavior: "smooth" })
                }
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  featuredRef.current.scrollBy({ left: 350, behavior: "smooth" })
                }
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Scroll Container */}
          <div
            ref={featuredRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {featuredNews.map((item) => (
              <div key={item.id} className="min-w-[320px] max-w-[320px]">
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative bg-[#0b1f36] py-20 text-white">
        <img
          src={circleHalf}
          alt=""
          className="absolute bottom-0 right-10 w-100 h-100 pointer-events-none"
        />
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Latest News</h2>

          {/* Scroll Container */}
          <div className="space-y-6 max-h-80 overflow-y-auto pr-2 no-scrollbar">
            {latestNews.map((item) => (
              <div key={item.id} className="pb-4">
                <NewsListItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}