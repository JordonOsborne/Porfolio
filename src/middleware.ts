import { NextRequest, NextResponse } from 'next/server'
import { auth } from '../firebase.config'

export default async function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	requestHeaders.set('x-pathname', request.nextUrl.pathname)
	if (auth?.currentUser) {
		const token = await auth?.currentUser.getIdToken()
		requestHeaders.set('x-token', token)
	}

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	})
}
