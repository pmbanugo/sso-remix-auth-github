import { GitHubStrategy } from "remix-auth-github";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";

let gitHubStrategy = new GitHubStrategy(
  {
    clientID: "b84a26eeecda3f803e01",
    clientSecret: "7411c1eb6723d51fa7701295ab50dd813497a50b",
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  async ({ accessToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    return profile;
  }
);

export let authenticator = new Authenticator(sessionStorage);
authenticator.use(gitHubStrategy);
