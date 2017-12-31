# Globals are bad! Try to avoid them as much as possible.
# t = []

def flattenList(x):
    """ Flatten a list using recursion """

    flattened = []
    
    for i in x:
        # Sorry this will work only for ints, so not generic
        # I am making it generic for all types - anything other than
        # set or list or tuple will be added as such.
        # Tuples/lists/sets will be flattened out.
        if type(i) not in (list, tuple, set):
            flattened.append(i)
        else:
            flattened += flattenList(i)
            
    return flattened

if __name__ == "__main__":
    for test_case in ([1,2,3], [1,[2,[3]]], ['1','2', 'python', (3,4), (3,4,[5, [6]])], []):
        z = flattenList(test_case)
        print(z)



    
