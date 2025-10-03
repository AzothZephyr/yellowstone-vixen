// codama.cjs
const path = require("node:path");
const { rootNode } = require("@codama/nodes");
const { rootNodeFromAnchor } = require("@codama/nodes-from-anchor");
const { readJson } = require("@codama/renderers-core");
const { visit } = require("@codama/visitors-core");
const { renderVisitor } = require("@codama/renderers-vixen-parser");

// IMPORTANT: Change this to match the crate name
const projectName = "jupiter_swap";
const idl = readJson(path.join(__dirname, "idl.json"));

// Use the appropriate node constructor based on your IDL type:
const node = rootNodeFromAnchor(idl); // for Anchor/Shank idls

visit(
    node,
    renderVisitor({
        projectFolder: __dirname,
        projectName,
    }),
);
