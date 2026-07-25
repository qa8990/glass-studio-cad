import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const response = {
    template: 'pivot_door',
    dimensions: { width: 1200, height: 2200 },
    thickness_mm: 10,
    estimated_panels: 3,
    estimated_hinges: 2,
    summary: 'Proyecto generado desde el skeleton de agentes',
    prompt,
  };

  return NextResponse.json(response);
}
