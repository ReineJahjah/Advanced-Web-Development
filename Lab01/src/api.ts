import type { User } from "./types.ts";

export class HttpError extends Error {
    readonly status: number;

    constructor(status: number, message: string) {
        // 1. Call the parent constructor
        super(message);
        // 2. Set the error name to "HttpError"
        this.name = 'HttpError';
        // 3. Initialize the status property
        this.status=status;
    }
}

export async function fetchJson<T>(url: string, timeoutMs = 5000): Promise<T> {
    const response = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });

    if (!response.ok) {
        throw new HttpError(response.status, `Http ${response.status} for ${url}`);
    }

    return (await response.json()) as T;
}

export function errorMessage(err: unknown): string {
    if (err instanceof HttpError){
        return `Server said ${err.status}`;
    }
    if (err instanceof DOMException && err.name === 'TimeoutError'){
        return 'Timed out';
    }
    if (err instanceof Error){
        return err.message;
    }
    return String(err);
}
