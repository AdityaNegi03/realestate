"use client";

import StoreProvider from "@/state/redux";
// import { Authenticator } from "@aws-amplify/ui-react";
// import Auth from "./(auth)/authProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      {children}
      {/* Uncomment the following lines if you want to use Authenticator and Auth components */}
      {/* <Authenticator.Provider>
        <Auth>{children}</Auth>
      </Authenticator.Provider> */}
    </StoreProvider>
  );
};

export default Providers;