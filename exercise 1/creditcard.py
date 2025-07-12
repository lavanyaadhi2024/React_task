#credit card
date=int(input("date: "))
print(date)
if(date==0):
    print("no fine")
elif(date>=1 and date<=5):
    print("have to pay 500rs")
elif(date>=6 and date<=10):
    print("have to pay 600rs")
elif(date>=11 and date<=30):
    print("have to pay 1000")
elif(date>30):
    print("your bank account will be blocked")
else:
    print("invalid data")

