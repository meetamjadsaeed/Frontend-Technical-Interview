function serializeVNode(vnode) {
  return {
    tag: vnode.tag,
    attrs: vnode.attrs,
    children: vnode.children.map(serializeVNode),
  };
}
