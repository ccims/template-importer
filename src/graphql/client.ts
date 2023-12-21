import { GraphQLClient, RequestMiddleware } from "graphql-request";
import { getSdk } from "./generated";

export function useClient(token: string) {
    const requestMiddleware: RequestMiddleware = async (request) => {
        return {
            ...request,
            headers: {
                ...request.headers,
                Authorization: `Bearer ${token}`
            }
        };
    };

    const client = new GraphQLClient("http://localhost:8080/graphql", {
        requestMiddleware
    });

    return getSdk(client);
}

export type Client = ReturnType<typeof useClient>;
