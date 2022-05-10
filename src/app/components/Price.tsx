import React from 'react'

import {Text, Stack } from "@chakra-ui/react";

export default function Price() {
  return (
    <>
      <Stack className="price" spacing={0}>
        <Stack direction="row" fontSize="36px" fontWeight="100" spacing={1}>
          <Text>$</Text>
          <Text>16.399</Text>
        </Stack>
        <Stack direction="row" fontSize="18px" fontWeight="400" color="rgba(0,0,0,.9)">
          <Text>en 12x</Text>
          <Stack direction="row" style={{"fontSize":"18px"}} spacing={0.5}>
            <span style={{"paddingRight":"0.2em"}}>$</span>
            <span>2.325</span>
            <span 
              style={
                {
                  "fontSize":"10px", 
                  "marginTop":"4px",
                  "display":"flex",
                  "alignSelf":"flex-start"
                }
              }
              >
                51
              </span>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
