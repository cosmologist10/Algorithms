# No globals
# l = []

# Functions do things, so if a function can be made as a verb
# it is better. This function does factorizing, so "factorize"
# is better than "factors". In fact we are now using "factors"
# inside the function as a variable.

def factorize(number):
    """ Factorize a number using iteration """

    # Not l, use some meaningful variable name
    factors = []
    
    for i in range(number):
        if (number % (i+1)) == 0:
            factors.append(i+1)
    return factors

def factorize_r(n, fac=1):
    """ Recursive version of factorization """

    factors = []
    
    if n % fac == 0:
        factors.append(fac)

    fac += 1
    if fac <= n:
        factors += factorize_r(n,fac=fac)
        return factors
    else:
        return factors

if __name__ == "__main__":
    test_numbers = (100, 35, 128, 11, 31, 2)
    for n in test_numbers:
        print('Factors of',n,'=>',factorize(n))
        print('Factors of',n,'=>',factorize_r(n))

    
