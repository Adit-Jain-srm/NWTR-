import { NextResponse } from "next/server";

interface ApiMeta {
  requestId: string;
  timestamp: string;
  version: string;
}

function generateMeta(): ApiMeta {
  return {
    requestId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    version: "v1",
  };
}

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data, meta: generateMeta() }, { status });
}

export function paginatedResponse<T>(data: T[], pagination: { page: number; pageSize: number; totalItems: number }) {
  const totalPages = Math.ceil(pagination.totalItems / pagination.pageSize);
  return NextResponse.json({
    success: true,
    data,
    pagination: {
      ...pagination,
      totalPages,
      hasNext: pagination.page < totalPages,
      hasPrevious: pagination.page > 1,
    },
    meta: generateMeta(),
  });
}

export function errorResponse(code: string, message: string, status = 400, details?: unknown[]) {
  return NextResponse.json({ success: false, error: { code, message, details }, meta: generateMeta() }, { status });
}
