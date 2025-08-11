/**
 * Badge component shows a circular label on product image.
 * It displays discount (e.g. "30%") or "New" text.
 * Background color changes based on text:
 * - Red (#E97171) for discounts (contains "%")
 * - Green (#2EC1AC) for "New"
 * - Gray (#ccc) for others
 */

type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  const isPercent = text.includes("%");
  const isNew = text.toLowerCase() === "new";

  const bgColor = isPercent ? "#E97171" : isNew ? "#2EC1AC" : "#ccc";

  return (
    <div
      className="absolute top-[24px] left-[213px] w-[48px] h-[48px] rounded-full flex items-center justify-center font-poppins font-medium text-[16px] leading-[150%] select-none"
      style={{ backgroundColor: bgColor, color: "#fff" }}
    >
      {text}
    </div>
  );
}
