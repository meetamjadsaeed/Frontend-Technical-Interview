function deserializeVNode(node) {
  return h(node.tag, node.attrs, node.children.map(deserializeVNode));
}
