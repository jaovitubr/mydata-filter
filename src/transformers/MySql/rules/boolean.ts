export default function BOOLEAN(node: any) {
    return node.value === "true" ? "TRUE" : "FALSE"
}