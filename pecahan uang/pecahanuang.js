
function pecah(uang,jml_lembar){
    const pecahan=[100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    const hasil=[];
    for(let i=0;i<jml_lembar;i++){
        for(let j=pecahan.length;j>=0;j--){
            if(jml_lembar==1){ 
                if(uang > pecahan[j] && uang <pecahan[j-1]){
                    hasil[i]=pecahan[j-1];
                }
                else if(uang==pecahan[j]){
                    hasil[i]=pecahan[j];
                }   
            } 
            else if(jml_lembar==2){
                if(uang > pecahan[j] && uang < pecahan[j-1]){
                    hasil[i]=pecahan[j];
                    uang-=pecahan[j];
                }
                else if(uang == pecahan[j]){
                    hasil[i]=pecahan[j];
                    uang-=pecahan[j];
                }
                
            }
            else if(jml_lembar=3){
                if(uang > pecahan[j] && uang < pecahan[j-1]){
                    hasil[i]=pecahan[j];
                    uang-=pecahan[j];
                }
                else if(uang==pecahan[j]){
                    hasil[i]=pecahan[j];
                    uang-=pecahan[j];
                }
                
            }
            else if(jml_lembar=4){
                if(uang > pecahan[j] && uang < pecahan[j-1]){
                    hasil[i]=pecahan[j];
                    uang-=pecahan[j];
                }
                else if(uang==pecahan[j]){
                    hasil[i]=pecahan[j];
                    uang-=pecahan[j];
                }          
            }
        }  
    }
    return hasil;
}

console.log(pecah(23000,4));
console.log(pecah(17000,1));