from itertools import chain, combinations  # Solution1
l = {1, 2, 3, 4}
z = list(chain(*(list(combinations(l, n)) for n in range(0, len(l)+1))))
print(z)


def sub_set(inset):
    """ Subsets of a set (list) using recursion """

    if inset == []:
        return [[]]

    z = sub_set(inset[1:])

    return z + [[inset[0]] + x for x in z]

if __name__ == "__main__":
    for test_case in ([], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4]):
        print('Set is', test_case)
        print('Subsets are =>', sub_set(test_case))
