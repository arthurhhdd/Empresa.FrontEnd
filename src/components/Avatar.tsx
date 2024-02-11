import React from "react";
import { Avatar as MaterialAvatar } from "@mui/material";

interface IAvatarProps {
  value?: string;
  onClick?: () => void;
  size?: number;
}

const Avatar = ({ value, onClick, size }: IAvatarProps) => {
  return (
    <MaterialAvatar
      title={value}
      sx={{
        backgroundColor: obterCor(),
      }}
      onClick={onClick}
      style={{ width: size, height: size, fontSize: size ? size * 0.5 : "" }}
    >
      {value?.toUpperCase()?.charAt(0)}
    </MaterialAvatar>
  );
};

const obterCor = (): string => {
  const cores = ["#768088", "#FFA54C"];
  return cores[Math.floor(Math.random() * 2)];
};

export default Avatar;
