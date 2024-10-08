import { redirect, error } from "@sveltejs/kit";
import type { RequestEvent, Actions } from "./$types";



export async function load(event: RequestEvent) {
  const { cookies } = event;
}

export const actions: Actions = {
  sendMessage: async ({ request }) => {
    const data = await request.formData();
    const message: string = data.get("messagebody") as string;
    console.log(message);

    return { success: true, message };
  }
};

