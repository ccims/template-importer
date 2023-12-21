import * as fs from "fs";
import { TemplateEngine } from "./templateEngine";
import { useClient } from "./graphql/client";

function readFileSyncAsJSON(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
}

if (process.argv.length !== 4) {
    console.error("Usage: node script.ts <file_path> <auth_token>");
    process.exit(1);
}

const filePath = process.argv[2];
const authToken = process.argv[3];

try {
    const jsonData = readFileSyncAsJSON(filePath);
    const client = useClient(authToken);
    const templateEngine = new TemplateEngine(client, jsonData);
} catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
}
