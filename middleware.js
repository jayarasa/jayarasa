import { NextResponse } from "next/server"
import withAuth from "./middlewares/withAuth"

export function mainMiddleware(req) {
    const res = NextResponse.next()
    return res
}

export default withAuth(mainMiddleware, ["/dashboard","/dashboard/catalog", "/dashboard/landingpage", "/dashboard/faq", "/dashboard/:path*"])
