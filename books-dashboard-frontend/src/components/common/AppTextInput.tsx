import { Field, Input } from "@chakra-ui/react";

interface AppTextInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
}

function AppTextInput({ label, placeholder, defaultValue }: AppTextInputProps) {
  return (
    <Field.Root>
      {label && <Field.Label>{label}</Field.Label>}
      <Input placeholder={placeholder} defaultValue={defaultValue} />
    </Field.Root>
  );
}

export default AppTextInput;
