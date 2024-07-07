import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/jobs(.*)",
  "/callover(.*)",
  "/user(.*)",
  "/scan(.*)",
  "/auth(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  //matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
