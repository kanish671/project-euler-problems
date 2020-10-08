def main():
    i = 1
    s = '0'
    while(True):
        s = s + str(i)
        i = i + 1
        if(len(s) >= 1000001):
            break
    n = s[1] + s[10] + s[100] + s[1000] + s[10000] + s[100000] + s[1000000]
    print(n)

if __name__ == '__main__':
    main()
