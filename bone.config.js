export default {
    questions: [
        {
            type: "select",
            name: "component",
            message: "So that library?",
            choices: [
                { title: "Preact", value: "preact" },
                { title: "Preact with cssthis", value: "preact-cssthis" },
                { title: "Atomico", value: "atomico" }
            ],
            initial: 0
        },
        {
            type: "text",
            name: "name",
            message: "Which will be his name?"
        }
    ],
    onSubmit(data) {
        data.$source = data.component;
        data.$dist = data.name = data.name.replace(/[^\w]+/g, "-");
        return data;
    }
};
