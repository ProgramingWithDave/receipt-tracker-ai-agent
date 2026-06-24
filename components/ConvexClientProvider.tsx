"use client";

import { ReactNode, useEffect } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth, useUser } from "@clerk/nextjs";
import { SchematicProvider, useSchematicEvents } from "@schematichq/schematic-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const SchematicWrapped = ({ children }: { children: React.ReactNode }) => {
  const { identify } = useSchematicEvents();
  const { user } = useUser()

  useEffect(() => {
    const userName =
      user?.username ??
      user?.fullName ??
      user?.emailAddresses[0]?.emailAddress ??
      user?.id

    if (user?.id) {
      identify({
        // company level keys
        company: {
          keys: {
            id: user.id,
          },
          name: userName
        },
        // User level keys
      
        keys: {
          id: user.id,
        },
        name: userName,
      })
    }
  }, [user, identify])

  return children
}

const publishableKey = process.env.NEXT_PUBLIC_SCHEMATIC_KEY;

if(!publishableKey) {
  throw new Error("NEXT_PUBLIC_SCHEMATIC_KEY is not set.")
}

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <SchematicProvider publishableKey={publishableKey!}>
        <SchematicWrapped>

          {children}
        </SchematicWrapped>
      </SchematicProvider>
    </ConvexProviderWithClerk>
  );
}
