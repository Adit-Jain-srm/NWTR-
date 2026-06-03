import { NextResponse } from "next/server";

function meta() {
  return { requestId: crypto.randomUUID(), timestamp: new Date().toISOString(), version: "v1" };
}

export function success<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data, meta: meta() }, { status });
}

export function paginated<T>(data: T[], page: number, pageSize: number, totalItems: number) {
  const totalPages = Math.ceil(totalItems / pageSize);
  return NextResponse.json({
    success: true, data,
    pagination: { page, pageSize, totalItems, totalPages, hasNext: page < totalPages, hasPrevious: page > 1 },
    meta: meta(),
  });
}

export function error(code: string, message: string, status = 400, details?: unknown[]) {
  return NextResponse.json({ success: false, error: { code, message, details }, meta: meta() }, { status });
}
