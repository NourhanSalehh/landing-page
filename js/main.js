function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  console.log(navMenu); // تحقق إذا العنصر متعرف عليه في الكود
  navMenu.classList.toggle('show'); // أضف أو امسح الكلاس show
}