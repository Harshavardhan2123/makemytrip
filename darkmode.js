function changemode()
{
    let mybody=document.body;
    let font=document.getElementById("offers");
    let dark=document.getElementById("booksection")
    mybody.classList.toggle("mydark")
    font.classList.toggle("mydark")
    dark.classList.toggle("mydark")
}


function loadcoupon()
{
    document.getElementById('coupon').style.visibility='visible'
}

function closecoupon()
{
    let coup=document.getElementsByClassName("closecoupon")
    document.getElementById('coupon').style.visibility='hidden'
    coup.classList.toggle("closecoupon")

}
function search()
{
    document.location.href="listing.html";
    
}