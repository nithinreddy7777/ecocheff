count = 0
with open("nithin.txt","r") as f:
    data=f.read()
    nums=data.split(",")
    for val in nums:
        if(int(val) % 2 == 0):
            count +=1
print(count) 