priority=defaultdict(int)
def init_priority():
    priority['**'] = 14
    priority['++'] = 14
    priority['--'] = 14

    priority['~'] = priority['!'] = 13
    priority['*'] = priority['/'] = priority['%'] = 12
    priority['-'] = priority['+'] = 11
    priority['<<'] = 10
    priority['>>'] = 10
    priority['<<='] = 9
    priority['>>='] = 9
    priority['=='] = 8
    priority['!='] = 8
    priority['&'] = 7
    priority['^'] = 6
    priority['|'] = 5
    priority['&&'] = 4
    priority['||'] = 3
    priority['&='] = 1
    priority['^='] = 1
    priority['|='] = 1
    priority['%='] = 1
    priority['-='] = 1
    priority['+='] = 1
    priority['*='] = 1
    priority['/='] = 1
    priority['>='] = 1
    priority['<='] = 1
    priority['<<='] = 1
    priority['>>='] = 1
    priority['='] = 1
    priority['or'] = 0
    priority['and'] = 0
init_priority()
def prec(c):
    return priority[c] if c in priority else -10
def infix_to_postfix(s):
    st=[]
    result=[]
    i=0
    n=len(s)
    while i<n:

        c=s[i]
        if i+1<len(s) and s[i:i+2] in priority:
            c=s[i:i+2]
        if c==' ':
            i+=1
            continue
        elif c=='++':
            result+=c
            i+=2

            continue
        elif c=="--":
            result += c
            i += 2

            continue
        if ((len(c)==1) and ((c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z') or (c >= '0' and c <= '9') or (c=='.'))):
            c = s[i]
            string=''
            while ((c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z') or (c >= '0' and c <= '9') or (c=='.')):
                string+=c
                i+=1
                if i==n:
                    break
                c=s[i]
            result.append(string)
        elif c=='(':
            st.append('(')
            i+=1
        elif c==')':
            while st[-1]!='(':
                result+=st[-1]

                st.pop()
            st.pop()
            i+=1
        else:

            out=st[-1] if st else "undefined"
            while st and prec(c)<=prec(out):
                result+=st[-1]

                st.pop()
                if st:
                    out=st[-1]
                else:
                    break
            st.append(c)
            i+=1
    while st:
        result+=st.pop()
    return result
def evalutatepostfix(s):
    stack=[]
    i=0
    n=len(s)
    while i<n:
        if s[i] in priority:
            b=str(stack.pop())
            if stack:
                a=str(stack.pop())

                stack.append(eval(a+s[i]+b))
            else:
                stack.append(eval(s[i]+b))
        else:
            stack.append(s[i])
        i+=1
    return stack[-1]
class Solution:
    def calculate(self, s: str) -> int:
        a=infix_to_postfix(s)
        b=evalutatepostfix(a)
        return b
