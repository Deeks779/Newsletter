import { Card, CardBody, CardHeader, Button, Image } from "@heroui/react";
import ZoomImage from "../Component/ZoomImage";
import quarterImg from "/src/assets/image/quarter2.png";
import quarterImg2 from "/src/assets/image/quater1.png";
import { communities,upcomingEvents } from "../assets/SampleInformation";
import quarterImg3 from "/src/assets/image/bottonRight.png"

export default function CommunitiesPage() {
    return (
    <div className="min-h-screen bg-[#0b1f36] text-white">

      <section className="relative px-6 py-20 overflow-hidden">
        <img
          src={quarterImg2}
          alt=""
          className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        />
        <img
          src={quarterImg}
          alt=""
          className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4">Communities</h1>
          <p className="text-gray-300 text-lg">
            Connect. Collaborate. Grow.
          </p>
        </div>
      </section>
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Explore Our Communities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((c, i) => (
              <Card
                key={i}
                className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <ZoomImage
                    src={c.img}
                    alt={c.name}
                    className="h-50 w-100 object-cover"
                  />
                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {c.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-sm text-gray-500">
                      {c.members} members
                    </p>
                    <Button
                      size="sm"
                      radius="sm"
                      className="bg-[#BBA782] text-[#0b1f36] font-semibold"
                    >
                      Join
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0b1f36]">
        <img
                  src={quarterImg3}   
                  alt=""
                  className="absolute bottom-0 right-0 w-100 h-100 opacity-80 z-0 pointer-events-none"
                />
        <h2 className="text-center text-2xl font-semibold mb-10">
          Upcoming Community Events
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 px-6">
          {upcomingEvents.map((e, i) => (
            <Card key={i} className="bg-white text-black rounded-md">
              <CardBody className="flex flex-row items-center gap-6">
                <div className="text-center pr-4 border-r border-r-[#BBA782]">
                  <p className="text-2xl font-bold text-[#BBA782]">{e.day}</p>
                  <p className="text-xs">DEC 2025</p>
                </div>

                <div>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-gray-500">
                    Community-led initiatives and engaging discussions.
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}