import { Button } from '@heroui/react'
import {House,ChartColumn,Boxes,Paperclip} from 'lucide-react'
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <nav className="flex flex-col gap-4">

      <Button as={NavLink} to="/" isIconOnly variant="light">
        <House className="w-5 h-5 text-white" />
      </Button>

      <Button as={NavLink} to="#" isIconOnly variant="light">
        <Boxes className="w-5 h-5 text-white" />
      </Button>

      <Button as={NavLink} to="#" isIconOnly variant="light">
        <Paperclip className="w-5 h-5 text-white" />
      </Button>

      <Button as={NavLink} to="#" isIconOnly variant="light">
        <ChartColumn className="w-5 h-5 text-white" />
      </Button>

    </nav>
    </div>
  )
}
