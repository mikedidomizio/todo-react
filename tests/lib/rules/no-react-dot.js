"use strict";

const { RuleTester } = require("../../../lib/rule-tester");
const rule = require("../../../lib/rules/no-react-dot");
const ruleTester = new RuleTester();

const valid = [];

const invalid = [


    //  React hooks
    {
        code: `function Example() {
         const t = React.useState();
      }`,
        output: `function Example() {
         const t = useState();
      }`,
        env: { es6: true },
        errors: [
            {
                messageId: "no-react-dot"
            }
        ]
    },
    {
        code: `function Example() {
         const t = React.useContext();
      }`,
        output: `function Example() {
         const t = useContext();
      }`,
        env: { es6: true },
        errors: [
            {
                messageId: "no-react-dot"
            }
        ]
    },

    // type annotations
    {
        code: "const Example: React.FunctionComponent = {}",
        output: "const Example: FunctionComponent = {}",
        env: { es6: true },
        errors: [
            {
                messageId: "no-react-dot"
            }
        ],
        parserOptions: {
            tokens: false,
            comment: false,
            sourceType: "script"
        },
        parser: require.resolve("../../fixtures/parsers/typescript-parsers/variable-declaration-type-annotation-react")
    }

];

ruleTester.run("no-react-dot", rule, {
    valid,
    invalid
});
