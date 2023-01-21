import React, { use, useEffect, useRef, useState } from "react";
import PanelLayout from "@/layout/PanelLayout";
import ModalCreateProduct from "@/components/panel/ModalCreateProduct";
import dbConnect from "../../../../lib/mongodb";
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import Producto from "models/Producto";
import Head from "next/head";
const Index = ({ productos }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Productos, setProductos] = useState(productos.data);

  return (
    <>
      <Head>
        <title>Panel - Productos</title>
      </Head>
      <PanelLayout menuSelection="producto">
        <div
          className="
        w-full
        h-auto
        bg-white
        p-4
        rounded-md
        shadow-xl
        overflow-auto
        
        ">
          <ModalCreateProduct isOpen={isOpen} onClose={onClose} />
          <Button
            className="mb-7"
            colorScheme="twitter"
            size="md"
            variant="solid"
            onClick={onOpen}>
            Crear producto
          </Button>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Productos publicados en la web</TableCaption>
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Precio USD</Th>
                  <Th>Fecha de creación</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Productos.map((producto: any) => (
                  <Tr key={producto._id}>
                    <Td>{producto.nombre}</Td>
                    <Td>{producto.precio}</Td>
                    <Td>{new Date(producto.fecha).toLocaleDateString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </PanelLayout>
    </>
  );
};

//get data with fetch in server side
export async function getServerSideProps() {
  const req = await fetch("http://localhost:3000/api/productos");
  const productos = await req.json();
  return {
    props: {
      productos,
    },
  };
}

export default Index;
