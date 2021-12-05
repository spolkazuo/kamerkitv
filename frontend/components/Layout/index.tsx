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
          <div className={"col-start-1 col-end-9 xl:col-start-1 xl:col-end-7"}>
            {children}
          </div>
          <div
            className={
              "col-start-1 col-end-9 xl:col-start-7 xl:col-end-9 order-first xl:order-last mx-3 relative xl:fixed lg:right-0 min-w-filteredContainer"
            }
          >
            <FiltersComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
