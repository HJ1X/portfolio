import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldValues, useForm } from "react-hook-form";
import { TRANSITION_SLOW } from "../consts";

const ContactPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });
  const onSubmit = (event: FieldValues) => {
    console.log(event);
  };

  return (
    <Box w={"100%"} my={"auto"} p={16} id="contact-form-container" pt={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <FormControl p={2}>
            <FormLabel>First Name</FormLabel>
            <Input
              {...register("firstName", {
                required: "Please enter your first name",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter a valid first name",
                },
              })}
              variant={"filled"}
            />
            {!errors.firstName ? <Box h={"24px"}></Box> : null}
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <Text
                        key={type}
                        color={"red"}
                        transition={TRANSITION_SLOW}
                      >
                        {message}
                      </Text>
                    ))
                  : null;
              }}
            />
          </FormControl>
          <FormControl p={2}>
            <FormLabel className="mt-5">Last Name</FormLabel>
            <Input
              {...register("lastName", {
                required: "Please enter your last name",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter a valid last name",
                },
              })}
              variant={"filled"}
            />
            {!errors.lastName ? <Box h={"24px"}></Box> : null}
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <Text key={type} color={"red"}>
                        {message}
                      </Text>
                    ))
                  : null;
              }}
            />
          </FormControl>
        </HStack>
        <FormControl p={2}>
          <FormLabel className="mt-5">Email Address</FormLabel>
          <Input
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email address",
              },
            })}
            variant={"filled"}
          />
          {!errors.email ? <Box h={"24px"}></Box> : null}
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <Text key={type} color={"red"}>
                      {message}
                    </Text>
                  ))
                : null;
            }}
          />
        </FormControl>
        <FormControl p={2}>
          <FormLabel className="mt-5">Message</FormLabel>
          <Textarea
            {...register("message", {
              required: "Please enter a message",
              minLength: {
                value: 10,
                message: "Please enter atleast 10 characters",
              },
            })}
            variant={"filled"}
          />
          {!errors.message ? <Box h={"24px"}></Box> : null}
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <Text key={type} color={"red"}>
                      {message}
                    </Text>
                  ))
                : null;
            }}
          />
        </FormControl>
        <Button
          className=""
          colorScheme={"green"}
          type="submit"
          display={"block"}
          mx={"auto"}
          mt={2}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
