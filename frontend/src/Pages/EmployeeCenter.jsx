import {
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@heroui/react";
import {
  ArrowRight,
} from "lucide-react";
import { announcements, helpfulLinks, quickAccess } from "../assets/SampleInformation";

export default function EmployeeCenter() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <section className="bg-[#0b1f36] text-white py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-2">Employee Center</h1>
          <p className="text-gray-300">
            Your workspace for tools, updates, and support
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">Quick Access</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quickAccess.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="rounded-xl border border-gray-200 shadow-none hover:border-[#BBA782] transition"
              >
                <CardBody className="flex gap-4">
                  <div className="p-2 rounded-md bg-[#BBA782]/20 text-[#BBA782]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-semibold mb-6">Announcements</h2>

        <div className="space-y-4">
          {announcements.map((a, i) => (
            <Card
              key={i}
              className="rounded-xl border border-gray-200 shadow-none"
            >
              <CardBody className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{a.time}</p>
                  <p className="font-medium">{a.title}</p>
                </div>
                <ArrowRight className="text-gray-400" size={18} />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-6">Helpful Links</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {helpfulLinks.map((link, i) => (
            <Card
              key={i}
              className="rounded-xl border border-gray-200 shadow-none hover:border-[#BBA782]"
            >
              <CardBody className="flex flex-row justify-between items-center">
                <p className="font-medium">{link}</p>
                <ArrowRight className="text-gray-400" size={18} />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
