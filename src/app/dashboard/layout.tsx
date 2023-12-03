import { AuthProvider } from "@/context/AuthContext";
import React, { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>{children}</AuthProvider>
    </Suspense>
  );
}
