"use client";

import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import Photos from "./_components/Photos";

const Home = () => (
  <DynamicContextProvider
    settings={{
      environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <DynamicWidget />
    <Photos />
  </DynamicContextProvider>
);

export default Home;
