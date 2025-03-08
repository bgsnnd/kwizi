import { clerkMiddleware } from "@clerk/nextjs/server";
import arcjet, {detectBot} from "@arcjet/next";
import { NextResponse } from "next/server";
import { createRouteMatcher } from "@clerk/nextjs/server";


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

const aj = arcjet({
  key: process.env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
  characteristics: ["ip.src"], // Track requests by IP
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        "CURL",
        // Uncomment to allow these other common bot categories
        // See the full list at https://arcjet.com/bot-list
        //"CATEGORY:MONITOR", // Uptime monitoring services
        //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
      ],
    }),
  ],
});


const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/categories(.*)",
  
]);

export default clerkMiddleware(async(auth, req) => {
  //menjalankan arcjet middleware
  const decision = await aj.protect(req);

  if(decision.isDenied()) {
    return NextResponse.json({error:"Forbidden", reason: decision.reason}, {status:403});
  }

  //skip authentication for public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  //auhentication user and protect non-public routes
  await auth.protect()
  return NextResponse.next();
});