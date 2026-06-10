"use client";

import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

type Props = {
  light: string;
  dark: string;
  alt: string;
};

export function ThemeImage({ light, dark, alt }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = !mounted ? dark : resolvedTheme === "light" ? light : dark;

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 10,
        border: "1px solid rgba(127,127,127,0.2)",
        marginTop: "1rem",
      }}
    />
  );
}
