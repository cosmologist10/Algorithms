import time
from tco import *


def stacktracker(f):
    """ Wrapper for call stack count """

    calls = {'count': 0}

    def wrapper(*args):
        calls['count'] += 1
        print 'Call count =>', calls['count']
        result = f(*args)
        return result

    return wrapper


@stacktracker
def reverse_string(data):
    """ Using recursion """

    if len(data) <= 1:          # base case
        return data
    return reverse_string(data[1:]) + data[0]


@stacktracker
def reverseString_tre(x, data):
    """ Reverse String with tail recursion elimination. """

    if x <= 1:
        return data

    else:
        return reverseString_tre(x-1, data[1:]) + data[0]


@stacktracker
@with_continuations()
def reverseString_tco(x, data, self=None):
    """ Reverse String with tail call optimization. """

    return data if x <= 1 else self(x-1, data[1:]) + data[0]


if __name__ == "__main__":
    import sys

    instring = str(sys.argv[1])
    x = len(instring)
    start_time = time.time()

    print 'Reverse String of', instring, 'using Recursion =>'
    print reverse_string(instring)
    print("--- %s seconds ---" % (time.time() - start_time))

    print 'Reverse String of', instring, 'using tail recursion elimination =>'
    print reverseString_tre(x, instring)
    print("--- %s seconds ---" % (time.time() - start_time))

    print 'Reverse String of', instring, 'using tail call optimization =>'
    print reverseString_tco(x, instring)
    print("--- %s seconds ---" % (time.time() - start_time))
