import { ReactNode } from 'react';

type YtProps = {
    title: string;
    children: ReactNode;
};

export const Yt = ({ title, children }: YtProps) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};
