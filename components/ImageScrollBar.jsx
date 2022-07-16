import Image from "next/image";
import { useContext } from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="26px"
        cursor="pointer"
        color={isFirstItemVisible ? "#aaa" : "#222"}
        pointerEvents={isFirstItemVisible ? "none" : "auto"}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="26px"
        cursor="pointer"
        color={isLastItemVisible ? "#aaa" : "#222"}
        pointerEvents={isLastItemVisible ? "none" : "auto"}
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => (
      <Box key={item.id} itemID={item.id} width="920px" overflow="hidden" p="1">
        <Image
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
