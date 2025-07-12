date=int(input("date :"))
print(date)
amount=int(input("enter the amount: "))
if(date==0):
    print("no fine")
elif(date>=1 and date<=5):
    a=(10/100*amount);
    print("you have to pay :" ,amount , "you have to pay fine amount: " ,a , "total amount have to pay: " , a+amount)
elif(date>=6 and date<=10):
    b=12/100*amount;
    print("you have to pay :",amount , "you have to pay fine amount: " ,b , "total amount have to pay: " , b+amount)
elif(date>=11 and date<=30):
    c=16/100*amount;
    print("you have to pay :",amount , "you have to pay fine amount: " ,c , "total amount have to pay: " , c+amount)
elif(date>30):
    print("your bank account is blocked")
else:
    print("invalid")