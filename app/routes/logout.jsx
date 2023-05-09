import { authenticator } from "../service/auth.server";

export async function action({ request }) {
  return await authenticator.logout(request, { redirectTo: "/login" });
}
