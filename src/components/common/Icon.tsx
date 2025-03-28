import * as icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IIconProps {
  name: keyof typeof icons; // Giúp TypeScript biết name là tên hợp lệ của icon
  size?: number;
  color?: string;
}

const Icon: React.FC<IIconProps> = ({ name, size, color }) => {
  const LucideIcon = icons[name] as React.FC<LucideProps>; // Ép kiểu an toàn

  if (!LucideIcon) {
    return null;
  }

  return (
    <div>
      <LucideIcon color={color} size={size} />
    </div>
  );
};

export default Icon;
