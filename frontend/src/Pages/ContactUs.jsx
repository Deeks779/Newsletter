import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const QUERY_KEY = "queries";

function ContactUs() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-GB"),
    },
  });

  const onSubmit = (data) => {
    const query = JSON.parse(localStorage.getItem(QUERY_KEY)) || [];
    query.push(data);
    localStorage.setItem(QUERY_KEY, JSON.stringify(query));
  };

  return (
    <div className="px-4 py-6 pb-24 min-h-screen max-w-5xl mx-auto space-y-10">

      {/* CONTACT INFO PANEL */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardBody className="flex items-start gap-3">
            <Mail className="text-[#BBA782]" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-500">
                support@newsletter.com
              </p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-start gap-3">
            <Phone className="text-[#BBA782]" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-500">
                +91 98765 43210
              </p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-start gap-3">
            <MapPin className="text-[#BBA782]" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-500">
                Block HQ, Bangalore, India
              </p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-start gap-3">
            <Clock className="text-[#BBA782]" />
            <div>
              <p className="font-medium">Working Hours</p>
              <p className="text-sm text-gray-500">
                Mon – Fri, 9AM – 6PM
              </p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* QUERY FORM */}
      <div>
        <h1 className="text-2xl font-semibold mb-6">
          Send Query
        </h1>

        <Card className="max-w-2xl">
          <CardBody className="space-y-4">
            <Input
              label="Query"
              isRequired
              {...register("query", { required: true })}
            />

            <Textarea
              label="Detail"
              isRequired
              {...register("detail", { required: true })}
            />

            <Button
              className="bg-[#BBA782] text-[#0b1f36] font-semibold"
              onPress={handleSubmit(onSubmit)}
            >
              Send Query
            </Button>
          </CardBody>
        </Card>
      </div>

    </div>
  );
}

export default ContactUs;
