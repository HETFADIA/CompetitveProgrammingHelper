n=1000
catalan=[1]*n
for i in range(1,n):
    catalan[i]=catalan[i-1]*(2*(2*i+1))//(i+2)
print(catalan[-1])

print(len(str(catalan[-1])))
