import { getUserRepository } from "../repositories/user.repository";
import { ReqUser, ReqUserUpdate } from "../types/typings";
import { hashPassword } from "../utils/hash";

export async function addUser(newUser: ReqUser) {
  try {
    const userRepository = getUserRepository();

    newUser.password = await hashPassword(newUser.password);

    const user = userRepository.create(newUser);

    const saved = await userRepository.save(user);

    // @ts-expect-error
    delete saved.password;

    return saved;
  } catch (error: any) {
    if (error?.code == "23505") throw { status: 409, message: "email exists" };

    throw error;
  }
}

export async function getUsers(userId: number | undefined) {
  try {
    const where = userId ? { id: userId } : {};

    return await getUserRepository().find({
      where,
      select: ["id", "firstName", "lastName", "email", "address", "telephone"],
    });
  } catch (error) {
    throw error;
  }
}

export async function updateUser(params: ReqUserUpdate) {
  try {
    if (!params.id) throw { status: 400, message: "invalid user id" };
    if (params.password) params.password = await hashPassword(params.password);

    const userRepository = getUserRepository();

    const user = userRepository.create(params);

    const saved = await userRepository.save(user);

    // @ts-expect-error
    delete saved?.password;

    return saved;
  } catch (error) {
    throw error;
  }
}
