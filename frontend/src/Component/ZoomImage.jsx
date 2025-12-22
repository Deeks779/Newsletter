import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Image,
} from "@heroui/react";

export default function ZoomImage({ src, alt, className }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`cursor-zoom-in max-w-md ${className}`}
        onClick={() => setOpen(true)}
      />

      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        // size="full"
        backdrop="opaque"
        classNames={{
          backdrop: "bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 min-w-screen min-h-screen",
        }}>
        <ModalContent>
          {() => (
            <ModalBody className="flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                className="cursor-zoom-out max-h-[90vh] w-auto"
                onClick={() => setOpen(false)}
              />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
