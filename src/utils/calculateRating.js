export const calculateRating=(rating)=>{

    const starPerc=(rating/5)*100;
    const starPercRounded=`${Math.round(starPerc/10)*10}%`;

    return starPercRounded
}