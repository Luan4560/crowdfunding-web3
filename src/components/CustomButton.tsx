
interface CustomButtomProps {
  btnType: "submit" | "reset" | "button";
  title: string;
  styles: string;
  handleClick: () => void;
}

export const CustomButton = ({ btnType, handleClick, styles, title }: CustomButtomProps) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[1rem] leading-[26px] text-white min-h-[52px] rounded-[10px] px-4 ${styles}`}
      onClick={handleClick}>
      {title}
    </button>
  )
}