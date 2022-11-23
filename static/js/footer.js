const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">T-shirts</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Casuals</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Watches</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">T-shirts</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Casuals</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Watches</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About the Company</p>
        <p class="info">write a brief description about the Company</p>
        <p class="info">Mobile - 07307417443</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & Services</a>
                <a href="#" class="social-link">Privacy Page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best Apparels Online Store</p>
    `;
}

createFooter();