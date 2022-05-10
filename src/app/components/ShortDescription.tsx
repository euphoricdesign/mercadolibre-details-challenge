import React from 'react'

import mock from "../../product/mock";

import {Text, Stack, Box, Container, StackDivider, Icon, Link, Button } from "@chakra-ui/react";
import {BsHeart} from "react-icons/bs";
import {HiOutlineTruck} from "react-icons/hi";
import {BsArrowReturnLeft} from "react-icons/bs";
import {BiCheckShield} from "react-icons/bi";
import {AiOutlineTrophy} from "react-icons/ai";
import Opinions from './Opinions';
import Price from './Price';
import ShippingDetails from './ShippingDetails';
import Buttons from './Buttons';
import ShortDescriptionLastText from './ShortDescriptionLastText';

export default function ShortDescription({product = mock.product}) {
  return (
    <Stack 
      style={{"border": "1px solid rgba(0,0,0,.1)", "padding": "24px 16px"}}
      borderRadius="8px"
    >
      <Stack className="sales" color="rgba(0,0,0,.55)" direction="row" divider={<StackDivider borderColor="rgba(0,0,0,.2)" height="13px" style={{"marginTop":"5px"}} />} fontSize="sm">
        <Text>Nuevo</Text>
        <Text>49 vendidos</Text>
      </Stack>
      <Stack className="title" direction="row" alignItems="flex-start" spacing={0}>
        <Text maxWidth="300px" width="300px" fontSize="22px" fontWeight="bold">{product.title}</Text>
        <Icon color="#3483fa" fontSize="21px" as={BsHeart} style={{"marginTop":"6px"}} />
      </Stack>
      <Opinions />
      <Price />
      <Link style={{"marginTop":"2px"}} fontSize="15px" color="#3483fa">Ver los medios de pago</Link>
      <ShippingDetails text1="Llega gratis mañana" text2="Ver más formas de entrega" icon={HiOutlineTruck}/>
      <ShippingDetails text1="Tenés 30 días desde que lo recibís." text2="Conocer más" icon={BsArrowReturnLeft}/>
      <Text fontSize="18px" fontWeight={600}>¡Última disponible!</Text>
      <Buttons />
      <ShortDescriptionLastText link='Compra protegida' text=', recibí el producto que esperabas o te devolvemos tu dinero.' icon={BiCheckShield}/>
      <ShortDescriptionLastText link='Mercado puntos.' text=' Sumás 163 puntos.' icon={AiOutlineTrophy}/>
    </Stack>
  )
}
