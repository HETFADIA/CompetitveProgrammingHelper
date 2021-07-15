//https://en.cppreference.com/w/c/language/operator_precedence
var priority={}
function init_priority(){
    priority['**']=14
    priority['++']=14
    priority['--']=14
    
    priority['~']=priority['!']=13
    priority['*']=priority['/']=priority['%']=12
    priority['-']=priority['+']=11
    priority['<<']=10
    priority['>>']=10
    priority['<<=']=9
    priority['>>=']=9
    priority['==']=8
    priority['!=']=8
    priority['&']=7
    priority['^']=6
    priority['|']=5
    priority['&&']=4;

    priority['||']=3

    priority['&=']=1
    priority['^=']=1
    priority['|=']=1
    priority['%=']=1
    priority['-=']=1
    priority['+=']=1
    priority['*=']=1
    priority['/=']=1
    priority['>=']=1
    priority['<=']=1
    priority['<<=']=1
    priority['>>=']=1
    priority['=']=1
    
    
    priority['or']=0
    priority['and']=0
}
init_priority()
function prec(c) {
    if (c in priority){
        return priority[c]
    }
    return -10;
}

function infixToPostfix(s) {
    
    st=[]; 
    var result=[];
 
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(i+1<s.length && (s.slice(i,i+2) in priority)){
            c=s.slice(i,i+2)
        }
        console.log(c)
        if(c==' '){continue}
        if(c=="++"){
            result+=c;
            i+=1
            result+=' '
            continue
        }
        else if (c=="--"){
            result+=c;
            i+=1;
            result+=' '
            continue
        }
        
        if((c.length==1)&&((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')||(c=='.'))){
            c = s[i];
            while((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')||(c=='.')){

                result += c;
                i++
                if(i==s.length){
                    break;
                }
                c = s[i];
            }
            i--;
            result+=' '
        }
 
        
        else if(c == '('){

            st.push('(');
        }
 
        
        else if(c == ')') {
            while(st[st.length-1] != '(')
            {
                result += st[st.length-1];
                result+=' '
                st.pop();
            }
            st.pop();
        }
        else {
            var out=st[st.length-1]
            
            while(!st==[] && prec(c) <= prec(out)) {
                result += st[st.length-1];
                result+=' '
                st.pop(); 
                if(st.length)
                out=st[st.length-1]
                else{
                    break;
                }
            }
            st.push(c);
        }
        if(c.length==2){
            i+=1
        }
    }
    
    
    while(st.length) {
        result += st[st.length-1];
        result+=' '
        st.pop();
    }
 
    return result
}
function split(arr){
    arr=arr.split(" ");
    newarr=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=""){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
function evaladv(a){
    a=a.split("or").join("||")
    a=a.split("and").join("&&")
    if(a==""){
        return 0
    }
    return eval(a)
}
function evaluatepostfix(s){
    s=split(s)
    var stack=[]
    for(var i=0;i<s.length;i++){
        if (s[i] in priority){
            if(stack.length==1){
                stack[stack.length - 1]="("+s[i]+stack[stack.length - 1]+")"
            }
            else{
                var pop1=stack.pop()
                var pop2=stack.pop()
                stack.push("("+pop2+s[i]+pop1+")")
            }
        }
        else{
            stack.push(s[i])
        }
    }
    return stack[0]
}
theta=3;
ans=infixToPostfix("1<<2+3")
console.log(ans)
ans2=evaluatepostfix(ans)
console.log(ans2)
console.log(eval(ans2))