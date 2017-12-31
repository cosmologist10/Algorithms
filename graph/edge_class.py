class Edge:
    """ Edge structure for a graph. """

    __slots__ = '_origin', '_destination', '_element'

    def __init__(self, u, v, x):

        self._origin = u
        self._destination = v
        self._element = x

    def endpoints(self):
        """ Return (u,v) tuple for vertices u and v. """

        return (self._origin, self._destination)

    def opposite(self, v):
        """ Return the vertex that is opposite v on this edge. """

        return self._destination if v is self._origin else self._origin

    def element(self):
        """ Return element associated with this edge. """

        return self._element
