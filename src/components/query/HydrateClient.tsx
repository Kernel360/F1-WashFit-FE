"use client";

import { Hydrate, HydrateProps } from "@tanstack/react-query";

function HydrateClient(props: HydrateProps) {
  return <Hydrate {...props} />;
}

export default HydrateClient;
