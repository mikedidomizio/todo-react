/**
 * @fileoverview Disallow using `React.`.
 * @author Mike DiDomizio
 */
"use strict";

const react = "React";

/** @type {import('../shared/types').Rule} */
module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary semicolons",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-react-dot"

            // url: "https://eslint.org/docs/rules/no-react-dot"
        },
        fixable: "code",
        schema: [], // no options

        messages: {
            "no-react-dot": "No React."
        }
    },
    create(context) {
        return {
            VariableDeclarator(node) {
                context.report({
                    node,
                    messageId: "no-react-dot",
                    fix(fixer) {

                        // for the type annotation of the component
                        if (
                            node.id.typeAnnotation?.typeAnnotation.typeName.left.name === react
                        ) {
                            return [fixer.removeRange(
                                [node.id.typeAnnotation?.typeAnnotation.typeName.left.range[0],
                                    node.id.typeAnnotation?.typeAnnotation.typeName.left.range[0] + 6]
                            )];
                        }

                        // remove `React.` when calling hooks
                        if (node.init?.callee?.object?.name === react) {
                            return [fixer.removeRange([node.init.range[0], node.init.range[0] + 6])];
                        }

                        return [];
                    }
                });
            }
        };
    }
};
