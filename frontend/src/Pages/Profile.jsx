import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Avatar,
} from "@heroui/react";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Deeksha Kushwaha",
    email: "deeksha@example.com",
    role: "Student",
    phone: "+91 9876543210",
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved profile:", profile); //API
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

      {/* PROFILE HEADER */}
      <Card className="rounded-xl" shadow="sm">
        <CardBody className="flex items-center gap-6 bg-[#0b1f36]">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            className="w-20 h-20"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">{profile.name}</h2>
            <p className="text-sm text-[#BBA782]">{profile.role}</p>
          </div>
          <Button
            variant="flat"
            className="bg-[#BBA782] font-semibold text-[#0b1f36]"
            onPress={() => setIsEditing(true)}
            isDisabled={isEditing}
          >
            Edit Profile
          </Button>
        </CardBody>
      </Card>

      {/* PROFILE DETAILS */}
      <Card className="rounded-xl">
        <CardHeader className="font-semibold text-lg">
          Personal Details
        </CardHeader>

        <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            value={profile.name}
            isReadOnly={!isEditing}
            variant={isEditing ? "bordered" : "flat"}
            onValueChange={(v) => handleChange("name", v)}
          />

          <Input
            label="Email"
            value={profile.email}
            isReadOnly={!isEditing}
            variant={isEditing ? "bordered" : "flat"}
            onValueChange={(v) => handleChange("email", v)}
          />

          <Input
            label="Phone"
            value={profile.phone}
            isReadOnly={!isEditing}
            variant={isEditing ? "bordered" : "flat"}
            onValueChange={(v) => handleChange("phone", v)}
          />

          <Input
            label="Role"
            value={profile.role}
            isReadOnly
            variant="flat"
          />
        </CardBody>
      </Card>

      {/* ACTION BUTTONS */}
      {isEditing && (
        <div className="flex justify-end gap-3">
          <Button
            variant="light"
            className="border border-[#0b1f36]"
            onPress={() => setIsEditing(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#BBA782] font-semibold text-[#0b1f36]"
            onPress={handleSave}
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}
