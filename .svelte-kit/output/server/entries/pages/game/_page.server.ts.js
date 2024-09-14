async function load(event) {
}
const actions = {
  joinGame: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username");
    return { success: true, username };
  }
};
export {
  actions,
  load
};
