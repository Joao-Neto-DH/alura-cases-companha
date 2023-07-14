import React from "react";

const LinkEstilizado = React.forwardRef(({children, onClick, href}, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} style={{color: "red"}}>
            {children}
        </a>
    );
});

export default LinkEstilizado;