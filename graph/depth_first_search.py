from . import Edge, Graph


def DFS(g, u, _value):
    """Perform Depth-first Search traversal for the graph. """

    for x in g.incident_edges(u):
        v = x.opposite(u)
        if v not in _value:
            _value[v] = e
            DFS(g, v, _value)
