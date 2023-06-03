// N1
/*
var a = [
    2,3,"a",[5,4,[],15, [3,4,5],[2],5,6], "aaa","bb", [5,[2],4,[],4]
]
for(var i=0;i<a.length;i++) {
    if(Array.isArray(a[i])) {
        for(var r=0;r<a[i].length;r++) {
            if(Array.isArray(a[i][r])) {
                if(a[i][r].length==0){
                    console.log("ცარიელი ელემენტი")
                }else {
                    if(a[i][r].length==1) {
                        console.log(100)
                    }else {
                        console.log(a[i][r])
                    }
                }
            }else {
                console.log(a[i][r])
            }
        }
    }else {
        console.log(a[i])
    }

}

// N2

var b =[5,7,6,3,4,9,110,234,3464,443]
for(var i =0;i<b.length;i++){
    if(b[i]%3==2) {
        console.log(b[i])
    }else {

    }
}


// N3
*/


var c =[1,2,3,4,5,6,7,3,4,5,6,2,9,7,5]
for(var i=0;i<c.length;i++){
    if(c[i]%3==0){
        console.log(Math.pow(c[i],3))
    }else {
        if(c[i]%2==0){
            console.log(Math.pow(c[i],2))
        }else {
            if(c[i]%7==0){
                delete c[i]
                
            } else {
               console.log(c[i])
            }
        }
    }
}
