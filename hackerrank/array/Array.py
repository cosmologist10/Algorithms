# Refered to https://www.hackerrank.com/challenges/arrays-ds

"""Print all N integers in A in reverse order as a single line of space-
   separated integers.
"""

"""Sample Input
    4
    1432
"""

"""Sample Output
   2 3 4 1
"""

n = int(input())
print(*list(input().split())[::-1])
