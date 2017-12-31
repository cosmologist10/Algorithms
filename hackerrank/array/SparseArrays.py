# Refered to https://www.hackerrank.com/challenges/sparse-arrays
""" This problem can also be solved by binary search method, which will took
    0(nlongn)
"""

data = []
target = []

x = int(input())

for i in range(x):
    z = str(input())
    data.append(z)


y = int(input())

for i in range(y):
    z = str(input())
    target.append(z)


def pattern_match(data, target):
    count = 0
    for x in data:
        if(x == target):
            count += 1
    print(count)


def SparseArray():
    for i in target:
        pattern_match(data, i)

SparseArray()
