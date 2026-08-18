import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const proto = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '')

  // Clean host (remove port if present)
  const cleanHost = host.split(':')[0]

  // Skip redirect for local development
  if (cleanHost === 'localhost' || cleanHost === '127.0.0.1') {
    return NextResponse.next()
  }

  const isHttp = proto === 'http'
  const isWrongHost = cleanHost !== 'afrithsulthan.in'

  if (isHttp || isWrongHost) {
    const targetUrl = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      'https://afrithsulthan.in'
    )
    return NextResponse.redirect(targetUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
}


