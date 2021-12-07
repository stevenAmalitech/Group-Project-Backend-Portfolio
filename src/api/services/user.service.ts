import { getUserRepository } from "../repositories/user.repository";
import { UserDetails } from "../types/typings";

export async function addUser(newUser: UserDetails) {
  try {
    const userRepository = getUserRepository();

    const args = {
      ...newUser,
      first_name: newUser.firstName,
      last_name: newUser.lastName,
    };

    const user = userRepository.create(args);

    const saved = await userRepository.save(user);

    return {
      firstName: saved.first_name,
      lastName: saved.last_name,
      email: saved.email,
      address: saved.address,
      telephone: saved.telephone,
    };
  } catch (error) {
    throw error;
  }
}
