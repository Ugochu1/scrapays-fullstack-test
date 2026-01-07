import { Field, Input } from "@chakra-ui/react";

interface AppTextInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  onTextChange?: (value: string) => void;
  value?: string;
}

function AppTextInput({
  label,
  placeholder,
  defaultValue,
  onTextChange,
  value
}: AppTextInputProps) {
  return (
    <Field.Root>
      {label && <Field.Label>{label}</Field.Label>}
      <Input
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => onTextChange?.(e.target.value)}
        value={value}
      />
    </Field.Root>
  );
}

export default AppTextInput;
