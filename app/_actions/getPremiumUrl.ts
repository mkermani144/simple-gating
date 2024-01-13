"use server";

import jwt from "jsonwebtoken";

const getPremiumURL = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.DYNAMIC_PK!);

    if (
      (decoded as jwt.JwtPayload).scope ===
      process.env.NEXT_PUBLIC_PREMIUM_USER_SCOPE!
    )
      return "https://cdn-id8r.b-cdn.net/wp-content/uploads/2023/03/alien_8.png";
    throw new Error("Unauthorized");
  } catch {
    throw new Error("Unauthorized");
  }
};

export default getPremiumURL;
