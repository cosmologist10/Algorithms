import time
from tco import *


def stacktracker(f):
    """ Wrapper for call stack count """

    calls = {'count': 0}

    def wrapper(*args, ** kwargs):
        calls['count'] += 1
        print 'Call count =>', calls['count']
        result = f(*args)
        return result

    return wrapper


@stacktracker
def factors_tre(n, number):
    """ Factorize using tail call elimination. """

    factorized = []

    if n >= 1:
        if number % n == 0:
            factorized.append(n)

        factorized += factors_tre(n-1, number)
        return factorized

    else:
        return factorized


@with_continuations()
def factors_tco(n, number, _factorized=[], self=None):
    self(n-1, number % n == 0, _factorized.append(n)) if n >= 1 else factorized


if __name__ == "__main__":
    import sys

    number = int(sys.argv[1])
    n = number
    start_time = time.time()

    print 'factors of', number, 'using tre =>'
    print factors_tre(n, number)
    print("---- %s seconds ----" % (time.time() - start_time))

    print 'factors of', number, 'using tco =>'
    print factors_tco(n, number)
    print("---- %s seconds ----" % (time.time() - start_time))
