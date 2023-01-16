import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import { RefObject, useRef } from "react"
import {FaBars, FaHome  } from 'react-icons/fa'
import {AiFillShopping} from 'react-icons/ai'
import {FaFileInvoiceDollar} from 'react-icons/fa'
const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField:RefObject<any> = useRef()

  return (
    <div className='w-screen flex p-4 bg-zinc-50 items-center justify-between'>
        <div className="text-2xl font-bold"><span className="text-blue-500 ">MARKET</span>PLACE</div>
        <div className="">
            <Input  placeholder="Buscar Producto" size={"md"} width={"500px"} background={"white"} />
        </div>
        <div>
            <FaBars onClick={onOpen} className="text-2xl cursor-pointer"/>
            <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <ul className="text-xl flex flex-col gap-4 mt-6">
                <li className="cursor-pointer flex items-center gap-3 hover:text-blue-500"> <FaHome/> Inicio</li>
                <li className="cursor-pointer flex items-center gap-3 hover:text-blue-500"><AiFillShopping/>Productos</li>
                <li className="cursor-pointer flex items-center gap-3 hover:text-blue-500"><FaFileInvoiceDollar/>Ordenes</li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </div>



       
    </div>
  )
}

export default Menu