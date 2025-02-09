import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

export const createUserService = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
};

export const getAllUsersService = async () => {
  return await prisma.user.findMany();
};

export const getUserByIdService = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const updateUserService = async (id: string, name: string, email: string) => {
  return await prisma.user.update({
    where: { id },
    data: { name, email },
  });
};

export const deleteUserService = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};
