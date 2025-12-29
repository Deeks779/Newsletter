import { addToast, Button } from '@heroui/react'
import {House,ChartColumn,Boxes,Paperclip, Contact, Contact2, Phone, CircleQuestionMark} from 'lucide-react'
import { NavLink } from "react-router-dom";
export default function Sidebar() {
    const copylink=async ()=>{
    await navigator.clipboard.writeText(window.location.href);
    addToast({
        title: "Link copied",
        description: "Page link copied to clipboard",
      });
  }
  return (
    <div>
      <nav className="flex flex-col gap-4">

      <Button as={NavLink} to="/" isIconOnly variant="light">
        <House className="w-5 h-5 text-white" />
      </Button>

      <Button as={NavLink} to="/contact" isIconOnly variant="light">
        <CircleQuestionMark className="w-5 h-5 text-white" />
      </Button>

      <Button as={NavLink} to="#" isIconOnly variant="light" onPress={copylink}>
        <Paperclip className="w-5 h-5 text-white" />
      </Button>

      <Button as={NavLink} to="/stats" isIconOnly variant="light">
        <ChartColumn className="w-5 h-5 text-white" />
      </Button>

    </nav>
    </div>
  )
}
