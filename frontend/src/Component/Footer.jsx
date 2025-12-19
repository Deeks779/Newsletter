import { Button,Link } from "@heroui/react"
import {Twitter,Linkedin, Github} from "lucide-react"

function Footer() {
  return (
      <footer className="py-10 text-center text-sm bg-black text-white">
        <div className="items-center">
            <Button as={Link} className="bg-black" href="https://x.com/" isExternal>
                <Twitter className="text-white"/>
            </Button>
            <Button className="bg-black text-white" as={Link} href="https://www.linkedin.com/" isExternal><Linkedin/></Button>
            <Button className="bg-black text-white" as={Link} href="https://github.com/Deeks779/Newsletter" isExternal><Github/></Button>
            </div>
        <div>© Clarke & Co. · Powered by Human Knowledge</div>
      </footer>
  )
}

export default Footer
