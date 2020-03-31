import * as React from "react";

import "./styles.css"

interface Props {
    count: number;
    renderItem: (index: number) => React.ReactNode
}

export default class Pagination extends React.PureComponent<Props> {

    render(){

        const {count, renderItem} = this.props;

        const items = [];


        for (let i = 0; i < count; i++){
            items.push(renderItem(i));
        }

        return (
            <div id="custom-pagination">
                {items}
            </div>
        )
    }
}
