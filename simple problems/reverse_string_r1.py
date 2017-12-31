from collections import deque

# Give functions meaningful names
# that says something about them.
# reverse2 => reverse_deque
def reverse_deque(data):
    """ Reverse a sequence using a deque """
    
    d = deque()
    d.extendleft(data)
    # Returns a string
    return ''.join(d)

# Using recursion
# Function names usually takes two forms in Python
# under_score: This is the C convention. E.g: reverse_string
# camelCase: This is the Java convention. E.g: reverseString
# But never with caps. So ReverseString is bad!

def reverse_string(data):
    """ Using recursion """
    
    if len(data) <= 1:          # base case
        return data
    return reverse_string(data[1:]) + data[0]

def reverse(data):
    """ Using sequence """

    # Why print here and return everywhere else ?
    return data[::-1]

if __name__ == "__main__":
    for instring in ('Hello','hotel','malayalam','wonderful','Incriminating!'):
        print(instring,'=>',reverse(instring))
        print(instring,'=>',reverse_string(instring))       
        print(instring,'=>',reverse_deque(instring))
