# https://www.hackerrank.com/challenges/array-left-rotation

"""Print a single line of n space-separated integers denoting the final state
   of the array after performing d left rotations.
"""

"""Sample Input
   5 4
   1 2 3 4 5
"""

"""Sample Output
   5 1 2 3 4
"""

n, d = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))

d %= n
print(*(arr[d:] + arr[:d]))
