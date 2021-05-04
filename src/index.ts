/*  Author  :   Tyler Osterberg
 *  Date    :   5/4/2021
 *  Company :   Spreetail
 *  Prompt  :   ../Work Sample.md
 */

import MultiValueStringDictionary from "./MultiValueStringDictionary";
import ReadLine from "readline";

let dict = new MultiValueStringDictionary();

/** Example of generics splitting my console input into a string[] */
const inputToArrayOfStrings = <T>(input: T): string[] => {
    let res = [""];
    if(typeof input === "string") {
        res = input.split(" ");
    }
    return res;
}

const readline = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const RecursiveAsyncReadLine = (): void => {
    readline.question("> ", function (answer: string) {

        let commands = inputToArrayOfStrings(answer);

        /** Main control block for command line program */
        if(commands.length > 0){
            switch(commands[0].toUpperCase()){
                case 'KEYS':
                    dict.printAllKeys();
                    break;
                case 'MEMBERS':
                    if(commands.length < 2){
                        console.log(') ERROR: MEMBERS expects another parameter, a key.');
                    } else {
                        dict.printMemberValues(commands[1]);
                    }
                    break;
                case 'ADD':
                    if(commands.length < 3){
                        console.log(') ERROR: ADD expects two parameters, a key and a value.');
                    } else {
                        console.log(dict.addKeyValue(commands[1], commands[2]));
                    }
                    break;
                case 'REMOVE':
                    if(commands.length < 3){
                        console.log(') ERROR: Remove expects two parameters, a key and a value.');
                    } else {
                        console.log(dict.removeValueAtKey(commands[1], commands[2]));
                    }
                    break;
                case 'REMOVEALL':
                    if(commands.length < 2){
                        console.log(') ERROR: Remove expects one parameter, a key.');
                    } else {
                        console.log(dict.removeKeyWithValues(commands[1]));
                    }
                    break;
                case 'CLEAR':
                    console.log(dict.clearDictionary());
                    break;
                case 'KEYEXISTS':
                    if(commands.length < 2){
                        console.log(') ERROR: Keyexists expects one parameter, a key.');
                    } else {
                        console.log(dict.doesKeyExist(commands[1]));
                    }
                    break;
                case 'VALUEEXISTS':
                    if(commands.length < 3){
                        console.log(') ERROR: Valueexists expects two parameters, a key and a value.');
                    } else {
                        console.log(dict.doesValueExist(commands[1], commands[2]));
                    }
                    break;
                case 'ALLMEMBERS':
                    dict.printAllMembersValues();
                    break;
                case 'ITEMS':
                    dict.printAllKeysAndValues();
                    break;
                case 'EXIT':
                    console.log(') closing...');
                    process.exit(0);
                default:
                    console.log(') ERROR: Input was not a recognized command');
                    break;
                }
            } else {
                console.log(') ERROR: Non-empty string input is expected.')
            }
        RecursiveAsyncReadLine();
    });
}

/** Command line entry point for stdio */
console.log('Work Sample for Tyler Osterberg has started...');
RecursiveAsyncReadLine();
