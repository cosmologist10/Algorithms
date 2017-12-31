def topo_sort(g):
    """ Return a list of vertices of directed acyclic graph g in topological order. """

    topo = []     # list of vertices placed in topological order
    ready = []    # list of vertices that has no reminaing constraints
    incount = []  # keep track of in-degree for each vertex
    for u in g.vertices():
        incount[u] = g.degree(u, False)
        if incount[u] == 0:
            ready.append(u)
    while len(ready) > 0:
        u = ready.pop()
        topo.append(u)
        for e in g.incident_edges(u):
            v = e.opposite(u)
            incount[v] -= 1
            if incount[v] == 0:
                ready.append(v)
    return topo
