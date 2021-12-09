import { getUserRepository } from "../repositories/user.repository";
import { ReqUser } from "../types/typings";
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
