import Header from './Header';
import {NextComponentType} from "next";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout: NextComponentType = props => (
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
);

export default Layout;
