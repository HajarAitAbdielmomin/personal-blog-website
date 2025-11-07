import nodemailer from 'nodemailer';

export async function POST(req:any) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "hajar.aitabdielmomin@gmail.com",
            replyTo: email,
            subject: `📩 From: ${email} - ${subject || "New Message from Contact Form"}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), {
            status: 500,
        });
    }
}
