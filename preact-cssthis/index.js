import { h, Component } from "preact";
import { style } from "cssthis";
import css from "./style.this.css";

let Layout = style("div")(css);

export default class extends Component {
    render() {
        return <Layout>hello!</Layout>;
    }
}
