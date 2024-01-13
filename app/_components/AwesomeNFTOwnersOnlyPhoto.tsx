import Image from "next/image";
import { useEffect, useState } from "react";

import {
  getAuthToken,
  useDynamicScopes,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";

import getPremiumURL from "../_actions/getPremiumUrl";

const AwesomeNFTOwnersOnlyPhoto = () => {
  const { userHasScopes } = useDynamicScopes();
  const wallets = useUserWallets();

  const [premiumSrc, setPremiumSrc] = useState<string | null>(null);

  const isAwesomeNFTOwner = userHasScopes(
    process.env.NEXT_PUBLIC_PREMIUM_USER_SCOPE!
  );

  useEffect(() => {
    const effect = async () => {
      if (isAwesomeNFTOwner) {
        try {
          setPremiumSrc(await getPremiumURL(getAuthToken()));
        } catch {
          setPremiumSrc(null);
        }
      } else {
        setPremiumSrc(null);
      }
    };

    effect();
  }, [isAwesomeNFTOwner]);

  return premiumSrc ? (
    <Image
      src={premiumSrc}
      alt="always-rendered"
      width={256}
      height={256}
      className="border-4 border-amber-300 rounded-lg"
    />
  ) : (
    <div className="border-4 border-amber-300 rounded-lg flex items-center justify-center w-64 h-64">
      {wallets.some((wallet) => wallet.connected)
        ? "AwesomeNFT Owners Only"
        : "Connect Wallet"}
    </div>
  );
};

export default AwesomeNFTOwnersOnlyPhoto;
