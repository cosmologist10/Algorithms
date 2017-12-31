arr = []
diagonally = []
up = []
down = []
left = []
right = []

for i in range(20):
    arr.append(list(map(int, input().split())))


for i in range(17):
    for j in range(17):
        diagonally.append(arr[i][j]*arr[i+1][j+1]*arr[i+2][j+2]*arr[i+3][j+3])

print(max(diagonally))

for i in range(17):
    for j in range(20):
        down.append(arr[i][j]*arr[i+1][j]*arr[i+2][j]*arr[i+3][j])
print(max(down))

for i in range(20):
    for j in range(17):
        left.append(arr[i][j]*arr[i][j+1]*arr[i][j+2]*arr[i][j+3])
print(max(left))

for j in range(20):
    for i in range(4, 20, 1):
        up.append(arr[(23-i)][j]*arr[(23-i)-1][j]*arr[(23-i)-2][j]*arr[(23-i)-3][j])
print(max(up))

# right
new_list=[]
for i in arr:
    new_list.append(i[::-1])

for i in range(20):
    for j in range(17):
        right.append(new_list[i][j]*new_list[i][j+1]*new_list[i][j+2]*new_list[i][j+3])
print(max(right))
