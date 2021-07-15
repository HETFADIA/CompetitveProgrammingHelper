var priority={}
function init_priority(){
    priority['**']=5;
    priority['<<']=5;
    priority['>>']=5;
    priority['%']=5;
    priority['^']=priority['&']=priority['|']=4;
    priority['*']=priority['/']=3
    priority['-']=priority['+']=2
}
init_priority()
function prec(c) {
    if (c in priority){
        return priority[c]
    }
    return -1;
}

function infixToPostfix(s) {
    
    st=[]; 
    var result=[];
 
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(c==' '){continue}
        
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
            c = s[i];
            while((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){

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
            while(!st==[] && prec(s[i]) <= prec(st[st.length-1])) {
                result += st[st.length-1];
                result+=' '
                st.pop(); 
            }
            st.push(c);
        }
    }
    
    
    while(st.length) {
        result += st[st.length-1];
        result+=' '
        st.pop();
    }
 
    return result
}
ans=infixToPostfix("111+22-334&5")
console.log(ans)