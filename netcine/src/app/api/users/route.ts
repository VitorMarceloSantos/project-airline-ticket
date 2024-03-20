import { db as prisma } from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
	const data = await request.json();
	const { name, email, password } = data;

	if (!name || !email || !password) {
		return NextResponse.json('Dados Inválidos.', { status: 400 });
	}
	
	const isUserExist = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	if (isUserExist) {
		return NextResponse.json({ error: 'Email já existente.' }, { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await prisma.user.create({
		data: {
			email,
			name,
			hashedPassword,
		},
	});

	return NextResponse.json(user);
}
