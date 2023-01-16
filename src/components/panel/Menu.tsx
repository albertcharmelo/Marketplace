import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { RefObject, useRef } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Menu = ({ menuSelection }: { menuSelection: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField: RefObject<any> = useRef();

  return (
    <div className="w-full flex p-4 bg-zinc-50 items-center justify-between shadow-xl">
      <div className="text-2xl font-bold">
        <span className="text-blue-500 ">MARKET</span>PLACE
      </div>
      <div className="">
        <Input
          placeholder="Buscar Producto"
          size={"md"}
          width={"500px"}
          background={"white"}
        />
      </div>
      <div>
        <FaBars onClick={onOpen} className="text-2xl cursor-pointer" />
        <Drawer
          isOpen={isOpen}
          placement="right"
          initialFocusRef={firstField}
          onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <ul className="text-xl flex flex-col gap-4 mt-6">
                <li
                  className={`opcion_menu cursor-pointer hover:text-blue-500 ${
                    menuSelection === "inicio" ? "text-blue-500" : ""
                  }`}
                  data-option={"inicio"}>
                  <Link href="/panel" className="flex items-center gap-3">
                    <FaHome /> Inicio
                  </Link>
                </li>
                <li
                  className={`opcion_menu cursor-pointer  hover:text-blue-500 ${
                    menuSelection === "producto" ? "text-blue-500" : ""
                  }`}
                  data-option={"producto"}>
                  <Link
                    className="flex items-center gap-3"
                    href="/panel/productos">
                    <AiFillShopping />
                    Productos
                  </Link>
                </li>
                <li
                  className={`opcion_menu cursor-pointer hover:text-blue-500 ${
                    menuSelection === "ordenes" ? "text-blue-500" : ""
                  }`}
                  data-option={"ordenes"}>
                  <Link
                    href="/panel/ordenes"
                    className="flex items-center gap-3">
                    <FaFileInvoiceDollar />
                    Ordenes
                  </Link>
                </li>
              </ul>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px"></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Menu;
