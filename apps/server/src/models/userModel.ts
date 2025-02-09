import prisma from "../config/prisma";

export const getAllUsersService = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const getUserByIdService = async (id: any) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const createUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const result = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return result;
};

export const updateUserService = async (
  id: any,
  name: string,
  email: string
) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
    },
  });
  return result;
};

export const deleteUserService = async (id: any) => {
  const result = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return result;
};
