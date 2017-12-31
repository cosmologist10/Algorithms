class Graph:
    """ Representation of a simple graph using adjacency map. """

    def __init__(self, directed=False):
        """ Create an empty graph(undirected, by default), graph is directed
        if optional parameter is set to True.
        """

        self._outgoing = {}
        self._incoming = {} if directed else self._outgoing

    def is_directed(self):
        """ Checking for directed graphs. """

        return self._incoming is not self._outgoing

    def vertex_count(self):
        """ Count no. of vertices in the graph. """

        return len(self._outgoing)

    def vertices(self):
        """Return the values of all vertices in the graph. """

        return self._outgoing.keys()

    def edge_count(self):
        """Return the number of edges in the graph. """

        total = sum(len(self._outgoing[v]) for v in self._outgoing)
        return total if self.is_directed else total//2

    def count(self):
        """Return the set of all edges in the graph. """

        result = set()
        for value in self._outgoing.values():
            result.update(value.values())
        return result

    def get_edge(self, u, v):
        """Retuen the edge from u to v. """

        return self._outgoing[u].get(v)  # returns None if v is not adjacent

    def incident_edges(self, v, outgoing=True):
        """Return all edges incident to vertex v in the graph. """

        x = self._outgoing if outgoing else self._incoming
        for edge in x[v].values():
            yield edge

    def insert_vertex
