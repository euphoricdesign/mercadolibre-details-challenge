import { Image, Stack } from '@chakra-ui/react'
import React, { useRef } from 'react'



export default function SliderGallery() {
  const mainImg = useRef(null)
  const handleEvent = (e = '') =>{
    mainImg.current.src = e.target.src
  }

  return (
    <Stack style={{"padding": "16px 0px", "marginLeft":"23px", "width":"720px"}}>
      <figure style={{
        "border":"2px solid #fff"
      }}>
        <Stack direction="row">
          <ul style={{
            "listStyle":"none",
            "margin":"0",
            "textAlign":"center",
            "display":"flex",
            "flexDirection":"column"
          }}>
            <li style={{
              "margin":"0px 0px 15px",
              "display":"inline-block",
              "width":"50px",
              "height":"50px",
              "border":"1px solid rgba(0,0,0,.25)",
              "cursor":"pointer",
              "borderRadius":"6px",
            }}>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg' />
            </li>
            <li style={{
              "margin":"0px 0px 15px",
              "display":"inline-block",
              "width":"50px",
              "height":"50px",
              "border":"1px solid rgba(0,0,0,.25)",
              "cursor":"pointer",
              "borderRadius":"6px"
            }}>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_918230-MLA31424182281_072019-O.jpg' />
            </li>
            <li style={{
              "margin":"0px 0px 15px",
              "display":"inline-block",
              "width":"50px",
              "height":"50px",
              "border":"1px solid rgba(0,0,0,.25)",
              "cursor":"pointer",
              "borderRadius":"6px"
            }}>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_616691-MLA27900381255_082018-O.jpg' />
            </li>
            <li style={{
              "margin":"0px 0px 15px",
              "display":"inline-block",
              "width":"50px",
              "height":"50px",
              "border":"1px solid rgba(0,0,0,.25)",
              "cursor":"pointer",
              "borderRadius":"6px"
            }}>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_754004-MLA32299823528_092019-O.jpg' />
            </li>
          </ul>
          <Stack width="668px" style={{"marginTop":"24px", "padding":"16px"}}>
            <Image height={465} objectFit="contain" display="block" ref={mainImg} src='http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg'/>
          </Stack>
        </Stack>
      </figure>
    </Stack>
  )
}
