"use client";

import React from "react";

type ProvidersProps = {
    children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <Providers>
            {children}
        </Providers>
    );
};