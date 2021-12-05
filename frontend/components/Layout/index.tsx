import { Box, ChakraProvider, theme, VStack } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import React, { FC } from "react";
import FiltersComponent from "components/Filters";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <div className={"grid grid-cols-8 gap-3 container mx-auto"}>
          <div className={"col-start-1 col-end-7"}>{children}</div>
          <div className={"col-start-7 col-end-9 "}>
            <FiltersComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
