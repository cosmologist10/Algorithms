# Reference https://www.hackerrank.com/challenges/crush?h_r=next-challenge&h_v=zen

N, M = list(map(int, input().split()))

l = []
for i in range(M):
    z = list(map(int, input().split()))
    l.append(z)

x = [0]*N

# Iteration

for i in l:
    a, b, k = i
    new_list = [z + k for z in x[a-1:b]]
    x[a-1:b] = new_list
print(max(x))

# Recursion


def add_num(target):
    a, b, k = target
    new_list = [z + k for z in x[a-1:b]]
    x[a-1:b] = new_list

for i in l:
    add_num(i)
print(max(x))
