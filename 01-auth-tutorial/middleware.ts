import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("IS LOGGEDINL: ", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // matcher: ["/auth/login"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
