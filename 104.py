def first_last(x):
    x = str(x)
    if(len(x) == 1000):
        return True
    return False
def main():
    a = [1,1]
    index = 3
    while(True):
        b = a[-1] + a[-2]
        a.append(b)
        index = index + 1
        break
        if first_last(b):
            break
    print(a[-1])
    print(index)

if __name__ == '__main__':
    main()
