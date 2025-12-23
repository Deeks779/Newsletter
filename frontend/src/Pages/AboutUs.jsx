import {
  Card,
  CardBody,
  CardHeader,
} from "@heroui/react";
import ZoomImage from "../Component/ZoomImage";

import quarterImgTL from "/src/assets/image/quater1.png";
import quarterImgTR from "/src/assets/image/quarter2.png";
import halfImgT from "/src/assets/image/halfTop.png"
import { Earth, Lightbulb, Target } from "lucide-react";

export default function AboutUs() {
  const leadership = [
    { name: "Ananya Sharma", role: "Chief Executive Officer" },
    { name: "Rohit Verma", role: "Head of Operations" },
    { name: "Meera Iyer", role: "People & Culture Lead" },
  ];

  return (
    <div className="min-h-screen">

      <section className="relative bg-[#0b1f36] text-white px-6 py-20 overflow-hidden">
        <img
          src={quarterImgTL}
          alt=""
          className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        />
        <img
          src={quarterImgTR}
          alt=""
          className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg">
            Building an inclusive, informed, and connected workplace.
          </p>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              We are committed to creating a workplace where transparency,
              collaboration, and growth thrive. Our platform connects employees
              with news, resources, and communities that matter.
            </p>
            <p className="text-gray-600">
              By fostering open communication and engagement, we empower teams
              to stay informed and involved.
            </p>
          </div>

          {/* Right: Image */}
          <ZoomImage
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team discussion"
            className="rounded-2xl w-full h-80 object-cover"
          />
        </div>
      </section>

      <section className="relative bg-[#0b1f36] py-20">
         <img
          src={halfImgT}
          alt=""
          className="absolute top-0 left-10 w-100 h-100 pointer-events-none"
        />
        <img
          src={quarterImgTR}
          alt=""
          className="absolute bottom-0 right-0 w-90 h-90 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {[
              {
                title: "Our Mission",
                desc: "To provide a unified platform that keeps employees informed, engaged, and connected.",
                icon: <Target className="w-10 h-10"/>,
              },
              {
                title: "Our Vision",
                desc: "To build a workplace culture rooted in trust, inclusion, and collaboration.",
                icon: <Earth className="w-10 h-10" />,
              },
              {
                title: "Our Values",
                desc: "Transparency, equality, innovation, and respect for every individual.",
                icon: <Lightbulb className="w-10 h-10"/>,
              },
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl">
                <CardBody className="text-center p-8">
                  <div className="flex justify-center text-4xl mb-4 ">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="p-0">
                  <ZoomImage
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                    alt={person.name}
                    className="rounded-t-2xl h-64 w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
