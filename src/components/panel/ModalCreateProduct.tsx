import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import FileInput from "../inputs/FileInput";

interface ModalCreateProductProps {
  isOpen: boolean;
  onClose: () => void;
}

const roundedNumber = (e: any) => {
  e.target.value = Math.round(e.target.value * 100) / 100;
};

const ModalCreateProduct = ({ isOpen, onClose }: ModalCreateProductProps) => {
  const formulario = useRef(null) as any;
  const toast = useToast();
  const handleCreateProduct = () => {
    console.log("Producto creado");
    //get data from form
    const data = new FormData(formulario.current);
    //parse data to json
    const dataJson = JSON.stringify(Object.fromEntries(data));

    fetch("/api/productos", {
      method: "POST",
      body: dataJson,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        onClose();
      });
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear un nuevo producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form action="/api/productos" method="post" ref={formulario}>
              <FormControl>
                <FormLabel>Nombre del Producto</FormLabel>
                <Input name="nombre" placeholder="" />
                <FormLabel className="mt-4">
                  Precio <small className="text-sm">USD</small>
                </FormLabel>
                <Input
                  type={"number"}
                  step={0.01}
                  name="precio"
                  placeholder="0.00 USD"
                  onChange={roundedNumber}
                />
                <FormLabel className="mt-4">Stock</FormLabel>
                <Input
                  type={"number"}
                  step={1}
                  name="stock"
                  placeholder="0.00 USD"
                  onChange={roundedNumber}
                />
                <FormLabel className="mt-4">Descripción</FormLabel>
                <Textarea
                  name="descripcion"
                  placeholder="Introduzca una descripción del Producto"></Textarea>
                <FormLabel className="mt-4">Categoria</FormLabel>
                <Select name="categoria">
                  <option value="Alimentos y Bebidas">
                    Alimentos y Bebidas
                  </option>
                  <option value="Salud y Medicamentos">
                    Salud y Medicamentos
                  </option>
                  <option value="Cuidado Personal">Cuidado Personal</option>
                  <option value="Hogar y Limpieza">Hogar y Limpieza</option>
                  <option value="Mascotas">Mascotas</option>
                  <option value="Bebés">Bebés</option>
                  <option value="Belleza">Belleza</option>
                  <option value="Electrónica">Electrónica</option>
                </Select>
                {/* <FormLabel className="mt-4">Imagen</FormLabel>
                <FileInput /> */}
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCreateProduct} colorScheme="blue" mr={3}>
              Guardar producto
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalCreateProduct;
