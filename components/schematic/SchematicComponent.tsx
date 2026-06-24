import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken";
import SchematicEmbed from "./SchematicEmbed";


async function SchematicComponent({ componentId }: { componentId?: string }) {
    console.log("SchematicComponent!!!", componentId);
    if (!componentId) {
        return null;
    }

    const accessToken = await getTemporaryAccessToken();

    if (!accessToken) {
        throw new Error("No access token found for user");
    }

    return <SchematicEmbed accessToken={accessToken} componentId={componentId} />
    
}

export default SchematicComponent