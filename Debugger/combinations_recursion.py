string=[]
def comb(given_arr,given_length,temp,index,saved):

    if(len(temp)==given_length and saved==0):
        string.append(temp)
    if index>=len(given_arr):
        return

    comb(given_arr,given_length,temp+[given_arr[index]],index+1,0)
    comb(given_arr, given_length, temp, index + 1,saved+1)
comb([1,2,3,4],2,[],0,0)
print(string)