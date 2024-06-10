import type { APIRoute } from "astro";

const errors = { name: "", email: "", phone: "", message: "", terms: "" };

export const POST: APIRoute = async ({ request }) => {
// Parse the incoming request as form data
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const service = data.get("service");
  const message = data.get("message");
  const terms = data.get("terms");

  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !phone || !service || !message || !terms) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

//   if (typeof name !== "string" || name.length < 1) {
//     errors.name += "Please enter a name. ";
//   }

  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};