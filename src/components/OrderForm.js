import {
  FormControl,
  Input,
  InputGroup,
  Textarea,
  useToast,
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Button from "./ButtonBlob";

const inputs = [
  { placeholder: "Nome da Empresa/Órgão", type: "text", name: "name" },
  { placeholder: "E-mail", type: "email", name: "email" },
  { placeholder: "Assunto", type: "text", name: "subject" },
];

export default function OrderForm() {
  const toast = useToast();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mwpepqeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        toast({
          title: `Olá, ${formValues.name}, seu contato foi recebido. Em breve retornaremos. Obrigado!`,
          containerStyle: {
            "&>div": {
              backgroundColor: "#008037",
              alignItems: "center",
            },
          },
          status: "success",
          position: "bottom-right",
        });

        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: 'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.',
          containerStyle: {
            "&>div": {
              backgroundColor: "#008037",
              alignItems: "center",
            },
          },
          status: "error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast({
        title: 'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.',
        containerStyle: {
          "&>div": {
            backgroundColor: "#008037",
            alignItems: "center",
          },
        },
        status: "error",
        position: "bottom-right",
      });
    }
  };

  return (
    <Box
      background="rgba(255, 255, 255, 0.8)"
      padding="20px"
      borderRadius="8px"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      maxWidth="600px"
      margin="auto"
    >
      <Stack spacing={4}>
      <Heading as="h4" textAlign= "center" fontSize="40px" textTransform="capitalize">
          Contato
        </Heading>
        <Text lineHeight="28px" fontSize="22px">
          Seja parceiro através de sua Empresa ou Órgão Municipal, para promover Projetos Sustentáveis de Nossa Cidade!
        </Text>
        <FormControl as="form" onSubmit={handleSubmit} marginBlockStart="36px">
          <InputGroup variant="flushed" flexDirection="column" gridGap="12px">
            {inputs.map((input, key) => (
              <Input
                key={key}
                required
                name={input.name}
                autoComplete={input.name}
                value={formValues[input.name]}
                type={input.type}
                onChange={handleChange}
                placeholder={input.placeholder}
                _placeholder={{ color: "charlestonGreen.900" }}
                paddingInline="6px"
                _focus={{
                  borderColor: "charlestonGreen.900",
                }}
                _autofill={{
                  textFillColor: "charlestonGreen.900",
                  borderRadius: "6px",
                  borderColor: "charlestonGreen.900",
                }}
              />
            ))}
          </InputGroup>
          <Textarea
            paddingBlockStart="20px"
            placeholder="Digite sua mensagem..."
            name="message"
            required
            value={formValues.message}
            onChange={handleChange}
            marginBlockEnd="40px"
            variant="flushed"
            borderRadius="none"
            _placeholder={{ color: "charlestonGreen.900" }}
            _focus={{
              borderColor: "charlestonGreen.900",
            }}
          />
          <Button
            textTransform="capitalize"
            color="#008037"
            backgroundColor="white"
            blobColor="#008037"
            type="submit"
            _before="none"
            _hover={{ color: "#7ED957" }}
            _focus={{ color: "#7ED957" }}
          >
            ENVIAR
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
}
