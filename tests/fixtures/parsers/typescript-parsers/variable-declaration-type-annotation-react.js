"use strict";

exports.parse = () => ({
    type: "Program",
    range: [0, 16],
    "loc": {
        start: { line: 1, column: 0 },
        end: { line: 1, column: 16 }
    },
    body: [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "Example",
                        "range": [
                            6,
                            38
                        ],
                        "loc": {
                            start: { line: 1, column: 6 },
                            end: { line: 1, column: 38 }
                        },
                        "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "range": [
                                13,
                                38
                            ],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 38 }
                            },
                            "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "React",
                                        "range": [
                                            15,
                                            20
                                        ]
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "FunctionComponent",
                                        "range": [
                                            21,
                                            38
                                        ]
                                    },
                                    "range": [
                                        15,
                                        38
                                    ]
                                },
                                "range": [
                                    15,
                                    38
                                ]
                            }
                        }
                    },
                    "init": {
                        "type": "ArrowFunctionExpression",
                        "generator": false,
                        "id": null,
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                                47,
                                49
                            ]
                        },
                        "async": false,
                        "expression": false,
                        "range": [
                            41,
                            49
                        ],
                        "loc": {
                            start: { line: 1, column: 41 },
                            end: { line: 1, column: 49 }
                        },
                    },
                    "range": [
                        6,
                        49
                    ],
                    loc: {
                        start: { line: 1, column: 6 },
                        end: { line: 1, column: 49 }
                    },
                }
            ],
            "kind": "const",
            "range": [
                0,
                49
            ],
            "loc": {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 49 }
            },
        }
    ],
    sourceType: "script",
    tokens: [

    ],
    comments: []
})
