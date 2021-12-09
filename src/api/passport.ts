import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { getUserRepository } from "./repositories/user.repository";
import { verifyPassword } from "./utils/hash";

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const [user] = await getUserRepository().find({ where: { email } });

        if (!user) return done(null, false, { message: "InvalidX email" });

        const passwordIsCorrect = await verifyPassword(password, user.password);

        if (!passwordIsCorrect)
          return done(null, false, { message: "Invalid password" });

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [user] = await getUserRepository().find({ where: { id } });

    done(null, user);
  } catch (error) {
    done(error);
  }
});

export { passport };
