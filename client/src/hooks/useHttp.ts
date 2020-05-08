import { useState, useCallback } from 'react';

type IResponseProps<T extends any> = T & {
    message?: string;
}

interface IObjectProps {
    [key: string]: string
}

export const useHttp = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async <T>(
        url = '',
        method = 'GET',
        body: IObjectProps = {},
        headers: IObjectProps = {}
    ) => {

        setLoading(true);
        let sendBody = '';

        if (body) {
            headers['Content-Type'] = 'application/json';
            sendBody = JSON.stringify(body)
        }

        try {
            const response: Response = await fetch(url, { method, body: sendBody, headers });
            const data: IResponseProps<T> = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так');
            }

            setLoading(false);
            return data;

        } catch (error) {
            setLoading(false);
            setError(error.message);
        }

    }

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return { isLoading, error, request, clearError }
}