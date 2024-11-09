"use client";

import { useEffect } from "react";

export default function InstallBootstrapJs() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  });
  return <></>;
}
