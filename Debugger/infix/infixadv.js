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
        if(i+2<s.length && (s.slice(i,i+2) in priority)){
            c=s.slice(i,i+2)
        }
        console.log(c)
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
ans=infixToPostfix("1<<4-334&5")
console.log(ans)