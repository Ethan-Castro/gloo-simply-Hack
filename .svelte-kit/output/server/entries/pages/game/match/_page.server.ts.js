async function load(event) {
}
const actions = {
  sendMessage: async ({ request }) => {
    const data = await request.formData();
    const message = data.get("messagebody");
    console.log(message);
    return { success: true, message };
  }
};
export {
  actions,
  load
};
