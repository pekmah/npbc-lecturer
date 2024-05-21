import React from "react";

const SectionedCard = ({
  card1Title,
  card1Desc,
  card2Title,
  card2Desc,
  cardsClassName,
  containerClassName,
}) => {
  return (
    <div
      className={`rounded-xl flex_row overflow-hidden w-full mt-5 ${containerClassName}`}
    >
      <div
        className={`bg-green-600 flex-1 flex_col gap-3 justify-center px-10 text-sm ${cardsClassName}`}
      >
        <h6 className={"text-white"}>{card1Title}</h6>

        <h6 className={"text-white font-medium text-15"}>{card1Desc}</h6>
      </div>

      <div
        className={`bg-red-600 flex-1 flex_col gap-3 justify-center px-10 text-sm ${cardsClassName}`}
      >
        <h6 className={"text-white"}>{card2Title}</h6>

        <h6 className={"text-white text-15 font-medium"}>{card2Desc}</h6>
      </div>
    </div>
  );
};

export default SectionedCard;
