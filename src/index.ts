import * as fs from "fs";
import { TemplateEngine } from "./templateEngine";
import { useClient } from "./graphql/client";

function readFileSyncAsJSON(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
}

if (process.argv.length !== 4 && process.argv.length !== 5) {
    console.error("Usage: node script.ts <file_path> <auth_token> [api_endpoint]");
    process.exit(1);
}

const filePath = process.argv[2];
const authToken = process.argv[3];
const url = process.argv[4] || "http://localhost:8080/graphql";

try {
    const jsonData = readFileSyncAsJSON(filePath);
    const client = useClient(authToken, url);
    const templateEngine = new TemplateEngine(client, jsonData);
    templateEngine.process().catch((e) => {
        console.error("Error processing templates:", e);
        process.exit(1);
    });
} catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
}
