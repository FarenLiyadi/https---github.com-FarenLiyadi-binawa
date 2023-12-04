import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

export default function PrimaryButton({
    children,
    className,
    onClick,
    ...props
}) {
    return (
        <button
            onClick={onClick}
            className={classNames(
                "text-white rounded-full py-3 px-6 md:py-4 md:px-10  transition-all duration-300 bg-primary hover:opacity-90",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
    onClick: PropTypes.func,
};
