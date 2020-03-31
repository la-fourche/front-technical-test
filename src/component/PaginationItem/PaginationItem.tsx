import * as React from "react";

import "./styles.css"

interface Props {
    label: string;
    selected?: boolean;
}

export default class PaginationItem extends React.PureComponent<Props> {

    render(){

        const {label, selected} = this.props;

        const className = selected ? "pagination-items-selected": "";

        return (
            <button
                id={"pagination-items"}
                className={className}
            >
                {label}
            </button>
        )
    }
}
