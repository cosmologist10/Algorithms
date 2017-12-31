# Use function doc strings always to comment functions
# Never start function names with caps.
# So Palindrome -> palindrome
def palindrome(string):
    """ Using recursion """
    
    if len(string) <= 1:
        return True
    else:
        if string[0] == string[-1]:
            # Assigning the rest of the string to a variable
            # like this allows easy debugging.

            # string[1:-1] not string[1:-2]
            # this was a major bug!
            rest = string[1:-1]
            # print('Checking =>',rest)
            return palindrome(rest)
        else:
            return False

# Use if __name__ == "__main__" for executing test code
# See below.

# Nah - it is not Python list, you should say
# using Python sequences. A string is a sequence.

# Also separate "is" from the rest of the string in
# function names with an underscore. It is a common convention
# in function names.

# So ispalindrome -> is_palindrome
def is_palindrome(word):
    """ Using strings - straightforward logic """

    if word == word[::-1]:
        return True
    else:
        return False

if __name__ == "__main__":
    # Use for loops efficiently to minimize test code length
    # Add enough test cases - not just 1 positive and 1 negative.
    for instring in ('xyz','bob','eeeeeeee','rotator','Malayalam'):
        print(instring,'=>',palindrome(instring.lower()))
        print(instring,'=>',is_palindrome(instring.lower()))      


    
