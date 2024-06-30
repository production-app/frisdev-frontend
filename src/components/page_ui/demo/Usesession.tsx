"use client";
import { useSession } from "@clerk/clerk-react";

export default function Home() {
  const { isLoaded, session, isSignedIn } = useSession();

  console.log(session);

  if (!isLoaded) {
    // Add logic to handle loading state
    return null;
  }
  if (!isSignedIn) {
    // Add logic to handle not signed in state
    return null;
  }

  return (
    <div>
      <p>
        This session has been active since{" "}
        {session.lastActiveAt.toLocaleString()}
      </p>
    </div>
  );
}
