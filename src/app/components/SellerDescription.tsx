import React from 'react'

import {
  Text,
  Stack, 
  StackDivider, 
  Link, 
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import location from '../../assets/location.png'
import medalla from '../../assets/medalla.jpg'
import clock from '../../assets/clock.png'
import message from '../../assets/message.png'

import './SellerDescription.css'

export default function SellerDescription() {
  return (
    <Stack 
      style={{"border": "1px solid rgba(0,0,0,.1)", "padding": "24px 16px","marginTop":"0","marginBottom":"16px"}}
      borderRadius="8px"
    >
      <Text color="rgba(0,0,0,.9)" fontSize="18px" marginBottom="28px">Información sobre el vendedor</Text>

      <Stack style={{"marginTop":"0", "marginBottom":"20px"}} direction="row" spacing={3}>
        <Image position="relative" top="2px" width="15px" height="20px" src={location} />
        <Stack spacing={0}>
          <Text color="rgba(0,0,0,.9)" fontSize="16px" fontWeight="400">Ubicación</Text>
          <Text color="rgba(0,0,0,.55)" fontSize="14px">Villa Pueyrredón, Capital Federal</Text>
        </Stack>
      </Stack>
      <Stack style={{"marginTop":"0","marginBottom":"20px"}} direction="row" spacing={3}>
        <Image position="relative" top="2px" height="20px" src={medalla} />
        <Stack spacing={0}>
          <Text color="#00a650" fontSize="16px" fontWeight="400">MercadoLíder Platinum</Text>
          <Text color="rgba(0,0,0,.55)" fontSize="14px">¡Es uno de los mejores del sitio!</Text>
        </Stack>
      </Stack>
      <UnorderedList className='thermometer' display="flex" flexDirection="row" listStyleType="none">
        <ListItem className='thermometer-item one'></ListItem>
        <ListItem className='thermometer-item two'></ListItem>
        <ListItem className='thermometer-item three'></ListItem>
        <ListItem className='thermometer-item four'></ListItem>
        <ListItem className='thermometer-item five'></ListItem>
      </UnorderedList>
      <Stack direction="row" divider={<StackDivider style={{"margin":"0px"}}/>} style={{"marginTop":"16px"}}>
        <Stack alignItems="center" style={{"padding": "0px 5px"}} width="106px">
          <Text color="#000" fontSize="24px">573</Text>
          <Text textAlign="center" fontSize="12px" style={{"marginTop":"0px"}} color="rgba(0,0,0,.9)">Ventas en los últimos 60 días</Text>
        </Stack>
        <Stack alignItems="center" style={{"padding": "0px 5px"}} width="106px">
          <Image src={message} width="35px" />
          <Text textAlign="center" fontSize="12px" style={{"marginTop":"8px"}} color="rgba(0,0,0,.9)">Brinda buena atención</Text>
        </Stack>
        <Stack alignItems="center" style={{"padding": "0px 5px"}} width="106px">
          <Image src={clock} width="43px" />
          <Text textAlign="center" fontSize="12px" style={{"marginTop":"5px"}} color="rgba(0,0,0,.9)">Despacha sus productos a tiempo</Text>
        </Stack>
      </Stack>
      <Link style={{"marginTop":"24px"}} fontSize="14px" color="#3483fa">Ver más datos de este vendedor</Link>
    </Stack>
  )
}
