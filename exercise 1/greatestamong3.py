a=int(input("enter the number a:"))
b=int(input("enter the number b:"))
c=int(input("enter the number c:"))
if(a>b and a>c):
    print("a is greater:", a)
elif(b>a and b>c):
    print("b is greater:", b)
else:
    print("c is greater:", c)