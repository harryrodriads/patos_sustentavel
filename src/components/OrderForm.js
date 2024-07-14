import {
  FormControl,
  Input,
  InputGroup,
  Textarea,
  useToast,
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

    toast({
      title: `Olá, ${formValues.name} seu Contato foi recebido, em breve retornaremos. Obrigado!`,
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
  };

  return (
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
            _placeholder={{ color: "white" }}
            paddingInline="6px"
            _focus={{
              borderColor: "#008037",
              boxShadow: " 0px 1px 0px 0px #008037",
            }}
            _autofill={{
              textFillColor: "#ffff",
              boxShadow: "0 0 0px 1000px #008037 inset",
              borderRadius: "6px",
              borderColor: "#008037",
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
        _placeholder={{ color: "white" }}
        _focus={{
          borderColor: "#008037",
          boxShadow: " 0px 1px 0px 0px #008037",
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
  );
}
