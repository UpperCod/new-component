import { h, Component } from "preact";
import "style.css";

export default class extends Component {
    render() {
        return <h1 class="{{name}}">hello!</h1>;
    }
}
