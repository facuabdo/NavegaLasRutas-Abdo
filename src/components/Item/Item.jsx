/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

export const Item = ({ producto }) => {
  return <Box className="producto-box" >{producto.nombre}</Box>;
};
