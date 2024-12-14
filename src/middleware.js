import { NextResponse } from 'next/server';

export const middleware = (request) => {
  // Check if the path is exactly the root "/"
  if (request.nextUrl.pathname === '/') {
    // Redirect to the dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
};

// Specify which routes this middleware should run on
export const config = {
  matcher: ['/'],
};
