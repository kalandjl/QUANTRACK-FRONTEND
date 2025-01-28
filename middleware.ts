import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token')
    const path = request.nextUrl.pathname

    // If user is logged in and tries to access auth pages
    if (token && ['/signin', '/signup'].includes(path)) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // If user is not logged in and tries to access dashboard
    if (!token && path.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    return NextResponse.next()
} 