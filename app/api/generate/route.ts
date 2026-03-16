import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    if (!process.env.OPENAI_API_KEY) {
      console.log("Missing API key");
      return Response.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are a professional sales copywriter." },
        {
          role: "user",
          content: "Write a short cold email.",
        },
      ],
    });

    return Response.json({
      email: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}