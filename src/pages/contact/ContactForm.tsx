import { Field } from "@/components/ui/chakra/field";
import FancyButton from "@/components/ui/custom/FancyButton";
import { MotionBox } from "@/components/ui/Motion";
import { revealFromBottom } from "@/lib/animation";
import { Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { toaster } from "@/components/ui/chakra/toaster";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    settings: {
      from_name: "HJ.dev",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      toaster.success({
        title: "Message sent successfully."
      })
      console.log(msg);
      reset();
    },
    onError: (msg) => {
      toaster.error({
        title: msg
      })
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Stack gap="6" align="flex-start" maxW="sm" width="full">
        <MotionBox {...revealFromBottom} transition={{ delay: 0.6 }} w="full">
          <Field
            label={
              <Text ml="1" fontSize="lg">
                Name
              </Text>
            }
            invalid={!!errors.name}
            required
          >
            <Input
              mt="1"
              size="lg"
              {...register("name", { required: "Name is required" })}
            />
          </Field>
        </MotionBox>
        <MotionBox {...revealFromBottom} transition={{ delay: 0.6 }} w="full">
          <Field
            label={
              <Text ml="1" fontSize="lg">
                Email
              </Text>
            }
            invalid={!!errors.email}
            required
          >
            <Input
              mt="1"
              type="email"
              size="lg"
              {...register("email", { required: "Email is required" })}
            />
          </Field>
        </MotionBox>
        <MotionBox {...revealFromBottom} transition={{ delay: 0.6 }} w="full">
          <Field
            label={
              <Text ml="1" fontSize="lg">
                Message
              </Text>
            }
            invalid={!!errors.message}
            required
          >
            <Textarea
              mt="1"
              resize="none"
              size="lg"
              rows={4}
              {...register("message", { required: "Message is required" })}
            />
          </Field>
        </MotionBox>
        <MotionBox {...revealFromBottom} transition={{ delay: 0.6 }} w="full">
          <FancyButton
            label="Send Message"
            size="lg"
            type="submit"
            theme="primary"
            loading={isSubmitting}
            disabled={isSubmitting}
          />
        </MotionBox>
      </Stack>
    </form>
  );
};

export default ContactForm;
