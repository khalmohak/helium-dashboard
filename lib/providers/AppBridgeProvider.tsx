import React from "react";
import PropTypes from "prop-types";

declare global {
    interface Window {
        shopify: {
            config: {
                shop: string;
            };
        };
    }
}

const AppBridgeProvider = ({children}: {
    children: React.ReactNode;
}) => {
    if (typeof window !== "undefined") {
        const shop = window?.shopify?.config?.shop;

        if (!shop) {
            return <p>No Shop Provided</p>;
        }
    }

    return <>{children}</>;
};

AppBridgeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppBridgeProvider;