import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { LightLogo } from "@/src/icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = () => {
  return (
    <Box w={"full"} h={"10vh"} px={10} borderBottom={"1px"}>
      <Flex h={"full"} justify={"space-between"} align={"center"}>
        <Box>
          <LightLogo />
        </Box>
        <Box>
          <IconButton aria-label="color-mode" icon={<BsFillSunFill />} colorScheme={"facebook"} variant={"outline"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
