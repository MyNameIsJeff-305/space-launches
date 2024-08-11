import type { APISpaceXResponse, Doc } from "../types/api";

export const getLaunchById = async (id: string) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const launch = (await res.json()) as Doc;

    return launch;
}

export const getLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc',
                },
            },
        }),
    });

    const { docs: launches } = (await res.json()) as { docs: APISpaceXResponse[] };

    return launches;
}

export const getLaunchesOrderedBy = async (order: string) => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: order,
                },
                limit: 12,
            },
        }),
    });

    const { docs: launches } = (await res.json()) as { docs: APISpaceXResponse[] };

    return launches;
}

export const getAmountOfPages = async (): Promise<number> => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
            },
        }),
    });

    const { totalDocs } = (await res.json()) as { totalDocs: number };

    return Math.ceil(totalDocs / 12);
}

export const getLaunchesByPage = async (page = 1): Promise<APISpaceXResponse[]> => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                page: page,
                limit: 12,
            },
        }),
    });

    const { docs: launches } = (await res.json()) as { docs: APISpaceXResponse[] };

    return launches;
}