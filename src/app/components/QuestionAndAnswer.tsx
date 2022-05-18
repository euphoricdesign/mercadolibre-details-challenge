import React, {useState, useRef, useEffect} from 'react'
import { Stack, Text, Button, Input, FormControl, Image } from '@chakra-ui/react'
import useRandomDates from '../../hook/useRandomDates'

import borde from '../../assets/borde.png'

export default function QuestionAndAnswer() {
  const [postQuestions, setPostQuestions] = useState([]);
  const [questions, setQuestions] = useState(false);

  const input = useRef();

  useEffect(() => {
    const localPostQuestions = localStorage.getItem("questions");

    if (localPostQuestions) {
      setPostQuestions(JSON.parse(localPostQuestions))
      setQuestions(true)
    }
  }, [localStorage.getItem("questions")])

  const handleSendPostQuestion = () => {
    const updatedPostQuestions = [...postQuestions, input.current.value];
    setPostQuestions(updatedPostQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedPostQuestions));
    input.current.value = "";
    setQuestions(true);
  }

  console.log("postQuestions::::::::::::::::::", postQuestions)

  return (
    <Stack style={{"marginLeft":"50px","paddingTop":"40px","marginTop":"0"}}>
      <Text fontSize="25px">Preguntas y respuestas</Text>
      <Text style={{"marginTop":"40px","paddingBottom":"8px"}} fontSize="18px" fontWeight="600">¿Qué querés saber?</Text>
      <Stack direction="row" style={{"marginTop":"17px"}}>
        <Button 
            backgroundColor="rgba(65,137,230,.15)" 
            color="#3483fa"
            _hover={{
              background: "rgba(65,137,230,.2)",
              color: "#3483fa",
            }}
            size="sm"
          >
            Costo y tiempo de envío
          </Button>
          <Button 
          backgroundColor="rgba(65,137,230,.15)" 
          color="#3483fa"
          _hover={{
            background: "rgba(65,137,230,.2)",
            color: "#3483fa",
          }}
          size="sm"
        >
          Devoluciones gratis
        </Button>
        <Button 
          backgroundColor="rgba(65,137,230,.15)" 
          color="#3483fa"
          _hover={{
            background: "rgba(65,137,230,.2)",
            color: "#3483fa",
          }}
          size="sm"
        >
          Medios de pago y promociones
        </Button>
        <Button 
          backgroundColor="rgba(65,137,230,.15)" 
          color="#3483fa"
          _hover={{
            background: "rgba(65,137,230,.2)",
            color: "#3483fa",
          }}
          size="sm"
        >
          Garantía
        </Button>
      </Stack>
      <Text style={{"marginTop":"40px"}} fontSize="18px" fontWeight="600">Preguntale al vendedor</Text>
      <Stack direction="row" style={{"marginTop":"16px"}}>
        <FormControl>
          <Input ref={input} width="550px" padding=".8125em .75em" lineHeight="1" minHeight="48px" placeholder='Escribe tu pregunta...' />
          <Button
            onClick={handleSendPostQuestion}
            backgroundColor="#3483fa" 
            color="#fff"
            _hover={{
              background: "#2968c8",
              color: "#fff",
            }}
            size="lg"
            style={{
              "marginLeft":"16px"
            }}
          >
            Preguntar
          </Button>
        </FormControl>
      </Stack>
          
      <Stack style={{"marginTop":"40px"}}>
        {
          questions && (
            <>
              <Text fontSize="18px" fontWeight="600" color="rgba(0,0,0,.9)">Últimas realizadas</Text>
              {postQuestions.map(q => (
                <Stack key={q}>
                  <Text style={{"marginTop":"24px"}} color="rgba(0,0,0,.9)" fontSize="16px">{q}</Text>
                  <Stack direction="row" spacing={1}>
                    <Image height="20px" src={borde} />
                    <Text fontSize="16px" color="rgba(0,0,0,.55)" style={{"position":"relative","top":"2px"}}>Si tenemos. {useRandomDates()}</Text>
                  </Stack> 
                </Stack>
              ))}
            </>
          )
        }
      </Stack>

    </Stack>
  )
}
