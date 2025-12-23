import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import {
  FileText,
  FileVideo,
  File,
  Download,
  Eye,
} from "lucide-react";
import { resources } from "../assets/SampleInformation";

const fileIcon = {
  pdf: <FileText className="text-red-500" />,
  doc: <File className="text-blue-500" />,
  video: <FileVideo className="text-purple-500" />,
};

function ResourceCard({ title, category, type }) {
  return (
    <Card className="rounded-xl border border-gray-200 hover:shadow-md transition">
      <CardBody className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gray-100">
            {fileIcon[type]}
          </div>
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Button
            size="sm"
            variant="bordered"
            startContent={<Eye size={16} />}
          >
            View
          </Button>
          <Button
            size="sm"
            className="bg-[#BBA782] text-[#0b1f36]"
            startContent={<Download size={16} />}
          >
            Download
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default function ResourceLibrary() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0b1f36] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-3">
            Resource Library
          </h1>
          <p className="text-gray-300 max-w-xl">
            Find documents, policies, and learning materials
          </p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-4">
          <Input
            placeholder="Search resources..."
            className="md:col-span-1"
          />

          <Select placeholder="Category">
            <SelectItem key="policy">HR Policy</SelectItem>
            <SelectItem key="training">Training</SelectItem>
            <SelectItem key="guidelines">Guidelines</SelectItem>
          </Select>

          <Select placeholder="File Type">
            <SelectItem key="pdf">PDF</SelectItem>
            <SelectItem key="doc">DOC</SelectItem>
            <SelectItem key="video">Video</SelectItem>
          </Select>

          <Select placeholder="Department">
            <SelectItem key="hr">HR</SelectItem>
            <SelectItem key="it">IT</SelectItem>
            <SelectItem key="ops">Operations</SelectItem>
          </Select>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <ResourceCard
              key={r.id}
              title={r.title}
              category={r.category}
              type={r.type}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
