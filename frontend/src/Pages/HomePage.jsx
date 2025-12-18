import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@heroui/react";
import NavbarPart from "../Component/Navbar";
import {Twitter,Linkedin,Instagram,Facebook} from "lucide-react"
import quarterImg from "/src/assets/image/quarter2.png"
import quarterImg2 from "/src/assets/image/quater1.png"
import quarterImg3 from "/src/assets/image/bottonRight.png"

export default function HomePage() {
    const upcomming=[{ d: 14, t: "Green Committee" }, { d: 21, t: "Annual General Meeting" }, { d: 29, t: "Equality Webinar" }]
  return (
    <div className="min-h-screen bg-[#0b1f36] text-white">
        <NavbarPart/>
      <section className="relative  mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center overflow-hidden">

      <img
        src={quarterImg2}
        alt=""
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
      />
      <img
        src={quarterImg}
        alt=""
        className="absolute bottom-25 right-0 w-80 h-80 z-0 pointer-events-none"
      />
      <div className="relative z-10">
        <p className="text-sm opacity-70 mb-2">1 day ago</p>
        <h1 className="text-4xl font-semibold leading-tight mb-4">
          A spotlight news article <br /> about a recent topic
        </h1>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <Button
          className="bg-[#BBA782] text-[#0b1f36] font-semibold"
          radius="sm"
        >
          Read more →
        </Button>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
        alt="office"
        className="rounded-2xl relative z-10 w-100 h-80 x-10"
      />
    </section>
<div className="-mt-25"></div>

      <section className="bg-white text-black py-25">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Latest News */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-6">Latest News</h2>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 mb-5 pb-2 border-b border-b-gray-200 ">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="thumb"
                  className="w-20 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm text-gray-500">{i} days ago</p>
                  <p className="font-medium">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Updates */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-6">Leadership Updates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="rounded-2xl shadow-md">
                  <CardHeader className="p-0">
                    <Image
                      src="https://www.adecco.com/en-us/-/media/project/adecco/adeccous/resources/benefits-for-workers-and-employers-who-return-to-work-header.jpg?h=800&iar=0&w=1920&hash=C26F834AF70384665C47049C19FEBFF8"
                      alt="meeting"
                      className="rounded-t-2xl"
                    />
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-gray-500 mb-1">Block HQ · {i} day ago</p>
                    <h3 className="font-semibold">
                        Lorem ipsum dolor sit amet, consectetur
                    </h3>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="relative py-16 bg-[#0b1f36]">
        <img
          src={quarterImg3}   
          alt=""
          className="absolute bottom-0 right-0 w-100 h-100 opacity-80 z-0 pointer-events-none"
        />
        <h2 className="text-center text-2xl font-semibold mb-10">Upcoming Events</h2>
        <div className="max-w-4xl mx-auto space-y-6 px-6">
          {upcomming.map(
            (e, i) => (
              <Card key={i} className="bg-white text-black rounded-md">
                <CardBody className="flex flex-row items-center gap-6">
                  <div className="text-center pr-2 border-r border-r-[#BBA782]">
                    <p className="text-2xl font-bold text-[#BBA782]">{e.d}</p>
                    <p className="text-xs">NOV 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold">{e.t}</p>
                    <p className="text-sm text-gray-500">
                      Morbi condimentum justo risus, quis eleifend lorem molestie sed.
                    </p>
                  </div>
                </CardBody>
              </Card>
            )
          )}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-10 text-center text-sm bg-black ">
        <div className="pl-[44%] flex gap-2 items-center"><Twitter/> <Linkedin/> <Facebook/> <Instagram/></div>
        © Clarke & Co. · Powered by Interact
      </footer>
    </div>
  );
}
