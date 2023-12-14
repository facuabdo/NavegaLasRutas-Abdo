import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { getCategorias } from "../../data/dataMock";
import logo from "../../assets/facommerce-logo.png";

export function NavBar() {
  const [navbarLinks, setNavbarLinks] = useState([]);

  useEffect(() => {
    getCategorias().then((categorias) => {
      setNavbarLinks(categorias.map((cat) => cat.nombre));
    });
  }, [navbarLinks]);

  const showSelectedLink = (link) => {
    alert("Seleccionaste categoría: " + link);
  };

  return (
    <Box className="navbar">
      <img src={logo} width="200" height="200" />
      <List className="navbar-links">
        {navbarLinks.map((link, index) => (
          <a href="#" key={index} onClick={() => showSelectedLink(link)}>
            <ListItem>
              <ListIcon as={FaCreativeCommonsSamplingPlus} color="blue.500" />
              {link}
            </ListItem>
          </a>
        ))}
      </List>
      <CartWidget />
    </Box>
  );
}
