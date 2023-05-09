// import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "../service/auth.server";

export async function loader() {
  return redirect("/login");
}

export async function action({ request }) {
  return authenticator.authenticate("github", request, {
    successRedirect: "/protected",
  });
}
