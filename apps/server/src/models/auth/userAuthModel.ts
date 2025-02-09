import prisma from "../../config/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUserService = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '1h' });
    return { user, token };
};

export const registerUserService = async (name: string, email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (user) {
        throw new Error('User already exists');
    }
    return await prisma.user.create({
        data: { name, email, password: hashedPassword },
    });
}