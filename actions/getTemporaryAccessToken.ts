"use server"

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;

if (!apiKey) {
    throw new Error("SCHEMATIC_API_KEY is not set")
}


const client = new SchematicClient({apiKey})

// Get a temporary access token 
export async function getTemporaryAccessToken() {
    console.log("Generating temporary access token...");
    const user = await currentUser()

    if(!user) {
        console.log("No user found, returning null");
        return null
    }

    console.log("Issuing temporary access token for user:", user.id);
    const resp = await client.accesstokens.issueTemporaryAccessToken({
        resourceType: "company",
        lookup: {id: user.id} // the lookup will vary depending on how you have configured your company keys
    })

    console.log(
        "roken response recieved:",
        resp.data ? "Token received" : "No token in response"
    )

    return resp.data.token;
}