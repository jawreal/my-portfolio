import { Resend } from "resend";

/*
 * I used JS only since this doesn't need to be complex.
 * And using TS here would need extra setup.
 */

export default async function handler(req, res) {
  try {
    /* Check for method */
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method not allowed",
      });
    }

    const { fullName, emailAddress, message } = JSON.parse(req.body)
    if (!fullName || !emailAddress || !message) {
      throw new Error("Invalid fields");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jorellrelleve@gmail.com",
      subject: `PORTFOLIO CONTACT from ${fullName}`,
      html: `
        <p>${message}</p>
        <p>sender email: ${emailAddress}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to send email",
    });
  }
}