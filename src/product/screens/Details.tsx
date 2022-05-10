import React from "react";

import {Product} from "../types";
import mock from "../mock";

import {Text, Stack, Box, Container, StackDivider, Icon, Link, Button } from "@chakra-ui/react";
import {AiFillStar} from "react-icons/ai";
import {BsHeart} from "react-icons/bs";
import {HiOutlineTruck} from "react-icons/hi";
import {BsArrowReturnLeft} from "react-icons/bs";
import {BiCheckShield} from "react-icons/bi";
import {AiOutlineTrophy} from "react-icons/ai";
import ShortDescription from "../../app/components/ShortDescription";
import SliderGallery from "../../app/components/SliderGallery";
import SellerPosts from "../../app/components/SellerPosts";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <div>
      <Box>
        <Container maxWidth="container.xl">
          <Stack direction="row" fontSize={15} marginTop={4} marginBottom="12px">
            <Text fontWeight={500}>También puede interesarte:</Text>
            <Text>peluches gigantes</Text>
            <Text _before={{content: "'-'", paddingRight: "10px"}}>peluche</Text>
            <Text _before={{content: "'-'", paddingRight: "10px"}}>unicornio</Text>
            <Text _before={{content: "'-'", paddingRight: "10px"}}>peluches de leon</Text>
            <Text _before={{content: "'-'", paddingRight: "10px"}}>encanto disney</Text>
          </Stack>

          <Stack direction="row" marginBottom="12px" divider={<StackDivider borderColor="rgba(0,0,0,.2)" height="13px" style={{"marginTop":"5px"}} />}>
            <Link color="#333" _hover= {{color: "#000"}} fontSize="14px">Volver al listado</Link>
            <Link fontSize="15px" color="#3483fa">Juegos y Juguetes</Link>
          </Stack>

          <Stack direction="row-reverse" spacing={2} backgroundColor="#fff" borderRadius={4} boxShadow="md" marginBottom={4} minWidth="800px" paddingBottom="30px">
            <Stack 
              marginTop="16px" 
              marginLeft="48px" 
              maxWidth="368px" 
              style={{"border": "1px solid transparent)", "marginRight":"16px"}}
              width="368px"
              borderRadius="8px"
              
            >
              <ShortDescription />
              <ShortDescription />
            </Stack>
            <Stack>
              <Stack divider={<StackDivider style={{"marginLeft":"50px", "marginBottom":"0"}} borderColor="#e5e5e5" />}>
                <SliderGallery />
                <Text paddingTop="40px" marginLeft="50px" color="#333" fontSize="24px">Publicaciones del vendedor</Text>
              </Stack>
              <SellerPosts />
              <Link style={{"marginLeft":"50px"}} fontSize="15px" color="#3483fa">Ver más publicaciones del vendedor</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default DetailsScreen;
