import { Field, Input } from "@chakra-ui/react";

interface AppTextInputProps {
  label?: string;
  placeholder?: string;
}

function AppTextInput({ label, placeholder }: AppTextInputProps) {
  return (
    <Field.Root>
      {label && <Field.Label>{label}</Field.Label>}
      <Input placeholder={placeholder} />
    </Field.Root>
  );
}

export default AppTextInput;
