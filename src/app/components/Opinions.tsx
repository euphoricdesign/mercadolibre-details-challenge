import React from 'react'

import {Text, Stack, Icon } from "@chakra-ui/react";
import {AiFillStar} from "react-icons/ai";

export default function Opinions() {
  return (
    <>
      <Stack className="opinions" direction="row" spacing={2} alignItems="center">
        <Stack color="#3483fa" direction="row" spacing={0.5}>
          <Icon as={AiFillStar} />
          <Icon as={AiFillStar} />
          <Icon as={AiFillStar} />
          <Icon as={AiFillStar} />
          <Icon as={AiFillStar} />
        </Stack>
        <Text color="rgba(0,0,0,.55)" fontSize="sm">4 opiniones</Text>
      </Stack>
    </>
  )
}
