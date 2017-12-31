import time


def reverse_list():
    """ Take a list of numbers from user and print the reverse
    order as a single line of space-seperated integers.
    """
    x = []
    while True:
        try:
            y = int(input("enter a number:"))
            x.append(y)
            print(x)

        except:
            time.sleep(1)
            break
    y = x[::-1]
    print('Reverse of a number is:')
    print(*y)


reverse_list()
