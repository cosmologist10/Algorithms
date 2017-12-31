def flattenList(x):
    """ Flatten a list using recursion """

    flattened = []

    for i in x:
        if type(i) not in (list, tuple, set):
            flattened.append(i)
        else:
            flattened += flattenList(i)

    return flattened

if __name__ == "__main__":
    for test_case in ([1, 2, 3], [1, [2, [3]]], ['1', '2', 'python', (3, 4), (3, 4, [5, [6]])], []):
        z = flattenList(test_case)
        print(z)
