import { Stack, Box, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import image from '../../assets/descarga.jpg'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './SellerPosts.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <Box width="220px" height="346px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden' boxShadow="sm">
    <Image width="100%" src={image} />

    <Box style={{"padding":"16px 12px 16px 16px"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Osos Escandalosos 50 Cm X Unidad Gigantes</Text>
    </Box>
  </Box>,
  <Box width="220px" height="346px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden' boxShadow="sm">
    <Image width="100%" src={image} />

    <Box style={{"padding":"16px 12px 16px 16px"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Osos Escandalosos 50 Cm X Unidad Gigantes</Text>
    </Box>
  </Box>,
  <Box width="220px" height="346px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden' boxShadow="sm">
    <Image width="100%" src={image} />

    <Box style={{"padding":"16px 12px 16px 16px"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Osos Escandalosos 50 Cm X Unidad Gigantes</Text>
    </Box>
  </Box>,
  <Box width="220px" height="346px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden' boxShadow="sm">
    <Image width="100%" src={image} />

    <Box style={{"padding":"16px 12px 16px 16px"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Osos Escandalosos 50 Cm X Unidad Gigantes</Text>
    </Box>
  </Box>,
  <Box width="220px" height="346px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden' boxShadow="sm">
    <Image width="100%" src={image} />

    <Box style={{"padding":"16px 12px 16px 16px"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Osos Escandalosos 50 Cm X Unidad Gigantes</Text>
    </Box>
  </Box>,
];



export default function SellerPosts() {
  return (
    <Stack style={{"marginLeft":"50px", "maxWidth":"700px", "maxHeight":"370px"}}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        disableDotsControls={true}
      />
    </Stack>
  )
}
