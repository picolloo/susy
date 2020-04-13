import emailjs from "emailjs-com"

export default function useEmail() {
  const sendEmail = emailPayload => {
    emailjs.send(
      process.env.GATSBY_SERVICE_ID,
      process.env.GATSBY_EMAIL_TEMPLATE_ID,
      emailPayload,
      process.env.GATSBY_USER_EMAIL_ID
    )
  }

  return { sendEmail }
}
