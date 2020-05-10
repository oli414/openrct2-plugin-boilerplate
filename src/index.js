/// <reference path="OPENRCT2PATH/bin/openrct2.d.ts" />

function main() {
    console.log("Hello World!");
}

registerPlugin({
    name: 'MYPLUGINNAME',
    version: '1.0',
    authors: [''],
    type: 'local',
    main: main
});