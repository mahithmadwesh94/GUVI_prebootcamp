/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### */


function printPattern( ){
    let char = '#';
 for(let i=1;i<8;i++){
    console.log(char.repeat(i));
 }
}
