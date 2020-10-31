// Implementation of a graph scrtructure to representate Alandar's board
import { readLines } from "https://deno.land/std/io/bufio.ts";

interface node {
    value: string;
    nodes: node[];
}

let n0: node;
let n11: node;
let n12: node;
let n13: node;

n0 = {value: "A", nodes: []}
n11 = {value: " ", nodes: []}
n12 = {value: " ", nodes: []}
n13 = {value: " ", nodes: []}

n0.nodes = [n11, n12, n13];
n11.nodes = [n0, n12];
n12.nodes = [n11, n0, n13];
n13.nodes = [n0, n12];


let nodeMap = new Map();
nodeMap.set("n0", n0);

nodeMap.set("n11", n11);
nodeMap.set("n12", n12);
nodeMap.set("n13", n13);

function printBoard(){
    let result = [["n0: ", n0.value], 
        ["n11: ", n11.value, "n12: ", n12.value, 
            "n13: ", n13.value]];
    return result;
}

function move(orig: node, dest: node): void {
    if (orig.nodes.includes(dest)) {
        dest.value = orig.value;
        orig.value = " ";
    } else {
        console.log("There is not a direct path between origin and destiny!");
    }
}

function order(xs: string): node[] {
    let tokens = xs.split(" ", 2);
    let result: node[] = [nodeMap.get(tokens[0]), nodeMap.get(tokens[1])];

    return result;
}

let quit: boolean = false;
while (quit == false) {

    // print board
    console.log(printBoard());

    // Ask for input
    console.log("\n move > ");
    const { value: input } = await readLines(Deno.stdin).next();

    // process input and move
    let journey: node[] = order(input);
    move(journey[0], journey[1]);
    console.log(printBoard());



}
