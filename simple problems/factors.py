import time


def stacktracker(f):
    """ Wrapper for call stack count """

    calls = {'count': 0}

    def wrapper(*args, **kwargs):
        calls['count'] += 1
        print 'Call count =>', calls['count']
        result = f(*args, **kwargs)
        return result

    return wrapper


def factorize(number):
    """ Factorize a number using iteration """

    factors = []

    for i in range(number):
        if (number % (i+1)) == 0:
            factors.append(i+1)
    return factors

@stacktracker
def factorize_num(number, fact=1):
    """ Factorize a number using recursion """

    factorized = []

    if fact <= number:
        if number % fact == 0:
            factorized.append(fact)

        fact += 1
        factorized += factorize_num(number, fact=fact)
        return factorized
    else:
        return factorized

if __name__ == "__main__":
    import sys

    n = int(sys.argv[1])
    start_time = time.time()

    print 'factors of', n, 'using iteration =>'
    print factorize(n)
    print("--- %s seconds ---" % (time.time() - start_time))

    print 'factors of', n, 'using recursion =>'
    print factorize_num(n, 1)
    print("--- %s seconds ---" % (time.time() - start_time))
