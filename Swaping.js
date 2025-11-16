// swaping a number with only to variable..

function SwapNumbers(Nums1,Nums2){
    console.log(`${Nums1} and ${Nums2}`)
    Nums1 = Nums1 + Nums2;
    Nums2 = Nums1 - Nums2;
    Nums1 = Nums1 - Nums2;
    console.log(`after swaping.\n${Nums1} and ${Nums2}`);
}
let Numbers = SwapNumbers(2,3);
console.log(Numbers);

