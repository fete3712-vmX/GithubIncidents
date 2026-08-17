(function (Scratch) {
    'use strict';

    // Check if Scratch runtime is available
    if (!Scratch.extensions) {
        return;
    }

    class MyCustomExtension {
        constructor(runtime) {
            this.runtime = runtime;
        }

        // Define the blocks and layout of your extension
        getInfo() {
            return {
                id: 'mycustomextension', // Unique ID (no spaces)
                name: 'My Extension',    // Name shown in the block palette
                color1: '#0099ff',       // Primary block color (Hex)
                color2: '#0077cc',       // Secondary block color (Hex)
                blocks: [
                    {
                        opcode: 'myReporterBlock',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'say hello to [NAME]',
                        arguments: {
                            NAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'World'
                            }
                        }
                    },
                    {
                        opcode: 'myCommandBlock',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'do something important'
                    }
                ]
            };
        }
    }

    // Register the extension with Scratch
    Scratch.extensions.register(new MyCustomExtension());
})(Scratch);
