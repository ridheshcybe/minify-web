"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exportnow = {
    path: '/json-api',
    handler: (req, res) => {
        res.set('Content-Type', 'application/json').end(JSON.stringify({
            "openapi": "3.0.0",
            "info": {
                "title": "Minify api",
                "description": "minify api by ridhesh w, cybe.",
                "contact": {
                    "url": "https://www.twitter.com/@cybetwt"
                },
                "license": {
                    "name": "Apache 2.0",
                    "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
                },
                "version": "1.0.0"
            },
            "servers": [
                {
                    "url": "https://minify.cybemachine.repl.co",
                    "description": "repl"
                },
                {
                    "url": "https://web-minify.vercel.app",
                    "description": "vercel server 1"
                }
            ],
            "paths": {
                "/api": {
                    "get": {
                        "tags": [
                            "js"
                        ],
                        "summary": "minify",
                        "description": "By passing in the appropriate options, you can minify js text\n",
                        "operationId": "getjs",
                        "parameters": [
                            {
                                "name": "code",
                                "in": "query",
                                "description": "raw js code",
                                "required": true,
                                "style": "form",
                                "explode": true,
                                "schema": {
                                    "type": "string"
                                }
                            }
                        ],
                        "responses": {
                            "200": {
                                "description": "minified content",
                                "content": {
                                    "application/json": {
                                        "schema": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/response"
                                            }
                                        }
                                    }
                                }
                            },
                            "400": {
                                "description": "no input/code detected"
                            }
                        }
                    },
                    "post": {
                        "tags": [
                            "js"
                        ],
                        "summary": "minify",
                        "description": "By passing in the appropriate options, you can minify js text\n",
                        "operationId": "postjs",
                        "requestBody": {
                            "content": {
                                "application/json": {
                                    "example": {
                                        "code": "console.log(1 + 1)"
                                    }
                                }
                            }
                        },
                        "responses": {
                            "200": {
                                "description": "minified content",
                                "content": {
                                    "application/json": {
                                        "schema": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/response"
                                            }
                                        }
                                    }
                                }
                            },
                            "400": {
                                "description": "no body detected"
                            }
                        }
                    }
                }
            },
            "components": {
                "schemas": {
                    "response": {
                        "maxProperties": 1,
                        "minProperties": 1,
                        "type": "object",
                        "properties": {
                            "code": {
                                "type": "string",
                                "format": "text",
                                "example": "const hi=!0;console.log(hi);"
                            },
                            "error": {
                                "type": "object",
                                "example": {
                                    "message": "Unexpected token: name «hi», expected: punc «;»",
                                    "filename": "0",
                                    "line": 1,
                                    "col": 5,
                                    "pos": 5
                                }
                            }
                        }
                    }
                }
            }
        }));
    }
};
exports.default = exportnow;
