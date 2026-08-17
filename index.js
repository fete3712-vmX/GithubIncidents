(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension requires unsandboxed mode to run');
    }
    

    class ScratchVC {
        constructor(runtime) {
            this.runtime = runtime;
            this.peer = null;
            this.connections = {};
                                    this.lastData = '';
                                                
                                                            // Load PeerJS library dynamically if not already loaded
                                                                        this._loadPeerJS();
        }

        getInfo() {
            return {
                id: 'scratchvc', // Unique ID (no spaces)
                name: 'Scratch Voice Chat',    // Name shown in the block palette
                color1: '#1f9900',       // Primary block color (Hex)
                color2: '#0f6700',       // Secondary block color (Hex)
                blocks: [
                    {
                        opcode: 'connectToVoicechat',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Connect to chat id [ID]',
                        arguments: {
                            ID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0 // Public one \\
                            }
                        }
                    }
                ]
            };
        }
    }

    connectToVoicechat(args) {
        // peerjs
    }

    // Register the extension with Scratch
    Scratch.extensions.register(new MyCustomExtension());
})(Scratch);
