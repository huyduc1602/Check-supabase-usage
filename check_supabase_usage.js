const fetch = require("node-fetch");

const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID;
const SUPABASE_ACCESS_TOKEN = process.env.SUPABASE_ACCESS_TOKEN;
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

async function checkDatabaseUsage() {
    const response = await fetch(
        `https://api.supabase.com/v1/projects/${SUPABASE_PROJECT_ID}/database`,
        {
            headers: {
                Authorization: `Bearer ${SUPABASE_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
        }
    );

    const data = await response.json();
    console.log("Database Usage:", data);

    if (data.size >= 450) {
        await fetch(ZAPIER_WEBHOOK_URL, {
            method: "POST",
            body: JSON.stringify({
                message: "⚠ Supabase Free Plan gần hết dung lượng!",
                database_size: data.size,
            }),
            headers: { "Content-Type": "application/json" },
        });

        console.log("Sent warning to Zapier!");
    }
}

checkDatabaseUsage();