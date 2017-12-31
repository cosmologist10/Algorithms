from collections import deque


def reverse_deque(data):
    """ Reverse a sequence using deque """

    d = deque()
    d.extendleft(data)
    # Returns a string
    return ''.join(d)


def reverse_string(data):
    """ Using recursion """

    if len(data) <= 1:          # base case
        return data
    return reverse_string(data[1:]) + data[0]


def reverse_sequence(data):
    """ Using sequence """

    return(data[::-1])

if __name__ == "__main__":
    for instring in ('Hello', 'hotel', 'malayalam', 'wonderful', 'Incriminating!'):
        print(instring, '=>', reverse_deque(instring))
        print(instring, '=>', reverse_string(instring))
        print(instring, '=>', reverse_sequence(instring))
