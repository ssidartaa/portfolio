"use client";

import { Button, ButtonProps, IconButton } from "@mui/material";

interface Props extends ButtonProps {
  icon?: boolean;
}

const ButtonComponent = ({
  children,
  variant = "outlined",
  color = "inherit",
  icon = false,
  ...rest
}: Props) => {
  return !icon ? (
    <Button color={color} variant={variant} tabIndex={-1} {...rest}>
      {children}
    </Button>
  ) : (
    <IconButton tabIndex={-1} {...rest}>
      {children}
    </IconButton>
  );
};

export default ButtonComponent;
