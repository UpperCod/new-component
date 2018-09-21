import { h, Element } from "atomico";

customElements.define(
    "{{name}}",
    class extends Element {
        static get props() {
            return ["hello"];
        }
        render() {
            return <h1>{this.props.hello}</h1>;
        }
    }
);
