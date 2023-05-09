import { authenticator } from "../service/auth.server";

export async function loader({ request }) {
  return authenticator.authenticate("github", request, {
    successRedirect: "/protected",
    failureRedirect: "/login",
  });
}
