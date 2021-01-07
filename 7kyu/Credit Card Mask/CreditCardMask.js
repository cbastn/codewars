//Credit Card Mask

function maskify(cc) {
    if(cc.length > 4){
        cc = cc.split('');
        for(let i = 0; i < (cc.length - 4); i++){
            cc[i] = '#';
        }
        return cc.join('')
    }else{ 
        return cc;
    }
}


    console.log(maskify('4556364607935616'), '############5616');
    console.log(maskify('1'), '1');
    console.log(maskify('11111'), '#1111');   