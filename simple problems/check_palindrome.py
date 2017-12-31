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


@stacktracker
def palindrome(string):
    """ Using Recursion """

    if len(string) <= 1:
        return True
    else:
        if string[0] == string[-1]:
            rest = string[1:-1]
            return palindrome(rest)
        else:
            return False


def is_palindrome(word):
    """ Using strings - straightforward logic """

    if word == word[::-1]:
        return True
    else:
        return False

if __name__ == "__main__":
    import sys

    for instring in ('xyz', 'bob', 'eeeeeee', 'Madam', 'Malayam'):
        start_time = time.time()

        print instring, 'using recursion =>', palindrome(instring.lower())
        print("--- %s seconds ---" % (time.time() - start_time))

        print instring, 'using strings =>', is_palindrome(instring.lower())
        print("--- %s seconds ---" % (time.time() - start_time))
