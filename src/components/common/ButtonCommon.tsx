import styled from "styled-components";
import * as icons from "lucide-react";
import Icon from "./Icon";

interface IButtonCommonProps {
  widthFull?: "full" | "auto"; //chiều rộng của button, mặc định không full
  bgcColor: string; //màu nền button
  message: string; //text
  borderRadius?: string; //Mặc định 16px
  textSize?: string; //Mặc định 16px
  reverse?: boolean; //Đổi chiều icon với text nếu có icon
  isSubmit?: boolean; //Type của button, mặc định type: "button"
  onclick?: () => void;
  iconName?: keyof typeof icons; //icon của button, mặc định không
  iconSize?: number; //iconSize của button, mặc định 16px
  boxShadow?: string; //mặc định Xanh-mobifone
}

const ButtonCommon: React.FC<IButtonCommonProps> = ({
  widthFull,
  bgcColor,
  message,
  borderRadius,
  textSize,
  reverse,
  isSubmit,
  onclick,
  iconName,
  iconSize,
  boxShadow,
}) => {
  return (
    <Button
      className="inline-flex items-center justify-center h-12 px-6 gap-x-2 sm:cursor-pointer sm:hover:opacity-[0.8] sm:active:scale-[0.98]"
      $bgcColor={bgcColor}
      $width={widthFull === "auto" ? false : true}
      $brdr={borderRadius || "16px"}
      $reverse={reverse && iconName ? true : false}
      $border={bgcColor === "White"}
      $boxShadow={boxShadow || "0px 6px 12px 0px rgba(63, 140, 255, 0.26)"}
      type={isSubmit ? "submit" : "button"}
      onClick={onclick}
    >
      <Text
        $textSize={textSize}
        $textColor={bgcColor === "White" ? "Text-1" : "White"}
      >
        {message}
      </Text>
      {iconName && (
        <Icon
          name={iconName}
          color={bgcColor === "White" ? "#004390" : "#fff"}
          size={iconSize}
        />
      )}
    </Button>
  );
};

export default ButtonCommon;

//styled Button
const Button = styled.button<{
  $bgcColor: string;
  $width: boolean;
  $brdr: string;
  $reverse: boolean;
  $border: boolean;
  $boxShadow: string;
}>`
  background-color: ${(props) =>
    props.$bgcColor === "Xanh-mobifone"
      ? "var(--Xanh-mobifone)"
      : props.$bgcColor === "White"
      ? "var(--White)"
      : props.$bgcColor};
  width: ${(props) => (props.$width ? "100%" : "auto")};
  border-radius: ${(props) => props.$brdr};
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "none")};
  border: ${(props) => (props.$border ? "1px solid  #ccc" : "none")};
  box-shadow: var(--${(props) => props.$boxShadow});
`;

//styled Text
const Text = styled.p<{ $textSize?: string; $textColor: string }>`
  font-size: ${(props) => props.$textSize || "16px"};
  color: ${(props) => `var(--${props.$textColor})`};
  font-weight: 600;
`;
