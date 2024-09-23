import * as fs from "fs";
import { TemplateEngine } from "./templateEngine";
import { useClient } from "./graphql/client";

function readFileSyncAsJSON(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
}

if (process.argv.length !== 5 && process.argv.length !== 6) {
    console.error("Usage: node script.ts <file_path> <client_id> <client_secret> [gropius_endpoint]");
    process.exit(1);
}

const filePath = process.argv[2];
const clientId = process.argv[3];
const clientSecret = process.argv[4];
const url = process.argv[5] || "http://localhost:4200";

let jsonData: any;

try {
    jsonData = readFileSyncAsJSON(filePath);
} catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
}
fetch(new URL("/auth/oauth/token", url).toString(), {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials"
    })
})
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Failed to authenticate: ${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then((data) => {
        const authToken = data.access_token as string;
        const client = useClient(authToken, new URL("/api/graphql", url).toString());
        const templateEngine = new TemplateEngine(client, jsonData);
        return templateEngine.process();
    })
    .catch((e) => {
        console.error("Error processing templates:", e);
        process.exit(1);
    });
