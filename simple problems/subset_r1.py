def sub_set(inset):
    """ Subsets of a set (list) using recursion """
    
    if inset == []:
        return [[]]

    z = sub_set(inset[1:])

    return z + [[inset[0]] + x for x in z]

if __name__ == "__main__":
    for test_set in ([],[1],[1,2],[1,2,3], [1,2,3,4]):
        print('Set is',test_set)
        print('Subsets are =>',sub_set(test_set))
