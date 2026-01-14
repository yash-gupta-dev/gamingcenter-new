import { oauth_google } from "../constants/constants";

export const onGoogleLogin = () => {
    const query = {
        client_id: oauth_google.client_id,
        redirect_uri: oauth_google.redirect_uri,
        response_type: "code",
        scope: oauth_google.scopes,
    };

    const url = new URL(oauth_google.endpoint);
    url.search = new URLSearchParams(query).toString();
    window.location.href = url.toString()
}