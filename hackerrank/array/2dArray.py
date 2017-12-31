# https://www.hackerrank.com/challenges/2d-array

"""Calculate the hourglass sum for every hourglass in ,
   then print the maximum hourglass sum.
"""

"""hourglass pattern(for each iterative element in 2d array)
    a b c
      d
    e f g
"""

"""Input Format
   There are 6 lines of input, where each line contains 6 space-separated
   integers describing 2D Array A; every value in A will be in the inclusive
   range of -9 to 9.
"""

arr = []
s = []

for i in range(6):
    arr.append(list(map(int, input().split())))

for i in range(4):
    for j in range(4):
        s.append(sum(arr[i][j:j+3]+arr[i+2][j:j+3])+arr[i+1][j+1])

print(max(s))
