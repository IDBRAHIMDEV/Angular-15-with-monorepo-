export interface AuthResponse {
    message?: string;
    success?: boolean;
    user?: string;
    token: string;
}