import React from "react";

import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider, Link} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {HiOutlinePrinter} from "react-icons/hi";
import {TiLocationOutline} from "react-icons/ti";
import {GiShoppingCart} from "react-icons/gi";
import './Navbar.css'

import logo from "../../assets/logo.png";
import disneyPubli from "../../assets/disney-publi.jpg";
import cart from "../../assets/cart.png";
import IconSvg from "./Icon";


export default function Navbar() {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={2.5}>
        <Container maxWidth="container.xl">
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="0 2px 3px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input paddingX={2} variant="unstyled" placeholder="Buscar productos, marcas y más..."/>
                  <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="rgba(0,0,0,.55)" direction="row" spacing={1.5}>
                
                <Image src={disneyPubli} maxWidth="340px" height="39px" />
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing="61px">
                <Stack alignItems="center" direction="row" spacing={1}>
                  <IconSvg width="23px"/>
                  <Stack spacing={0}>
                    <Text style={{"position":"relative","top":"4px"}} color="rgba(0,0,0,.55)" fontSize="12px" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text color="#333" fontSize="14px" lineHeight="normal">
                      Capital Federal
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="rgba(0,0,0,.55)" direction="row" fontSize="sm" spacing={5}>
                  <Link
                    className="first-link-navbar"
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                    _after={{borderColor: "rgba(0,0,0,.3)"}}
                  >
                    Categorías
                  </Link>
                  <Link 
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                  >
                    Ofertas
                  </Link>
                  <Link 
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                  >
                    Historial
                  </Link>
                  <Link 
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                  >
                    Supermercado
                  </Link>
                  <Link 
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                  >
                    Moda
                  </Link>
                  <Link 
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                  >
                    Vender
                  </Link>
                  <Link 
                    color="rgba(51,51,51,.6)"
                    _hover={{
                      color: "rgba(51,51,51,.9)",
                    }}
                    fontSize="14px"
                  >
                    Ayuda
                  </Link>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row" fontSize="sm" spacing={5}>
                <Link 
                  color="#333"
                  _hover={{
                    color: "#000",
                  }}
                  fontSize="14px"
                >
                  Creá tu cuenta
                </Link>
                <Link 
                  color="#333"
                  _hover={{
                    color: "#000",
                  }}
                  fontSize="14px"
                >
                  Ingresá
                </Link>
                <Link 
                  color="#333"
                  _hover={{
                    color: "#000",
                  }}
                  fontSize="14px"
                >
                  Mis compras
                </Link>
                <Image src={cart} width={6} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
