from copy import deepcopy


def floyd_warshal(g):
    """ Return a new graph that is transtive closure of g. """

    closure = deepcopy(g)  # allow complete copy of an arbitrary list
    verts = list(closure.vertices())
    n = len(verts)
    for k in range(n):
        for i in range(n):
            if i != k and closure.get_edge(verts[i], verts[k]) is not None:
