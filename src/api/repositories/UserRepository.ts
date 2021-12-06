import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export function getUserRepository() {
  return getCustomRepository(UserRepository);
}
