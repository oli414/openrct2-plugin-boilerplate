'use strict';

var Message = "Hello World";

// Expose the OpenRCT2 to Visual Studio Code's Intellisense

function main() {
    console.log(Message); // Display the imported "Hallo World" message from module.js.
}

registerPlugin({
    name: 'MYPLUGINNAME',
    version: '1.0',
    authors: [''],
    type: 'local',
    main: main
});
