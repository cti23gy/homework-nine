var homeContent = `<div class="home">
    <h1>HOME</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, explicabo. Beatae minus voluptatibus harum ullam dolore, porro id perspiciatis velit excepturi quo minima non dolores necessitatibus voluptatem delectus assumenda quasi.</p>
    <p>In sapiente reiciendis officia cum magni excepturi, exercitationem quod ex repellat vel possimus rem aperiam praesentium, eveniet assumenda soluta corrupti minus, architecto neque voluptatum animi quidem eius consectetur? Quam, soluta.</p>
    <p>Exercitationem, sequi perferendis! Iure expedita dicta laborum consectetur harum, quam alias nisi aliquam velit accusantium dolorem, repellendus nesciunt earum at quae, quaerat quasi consequatur et ullam. Sit libero deleniti iure.</p>
    <p>Atque, possimus? Quo iusto, temporibus deserunt quod minus deleniti fugit? Ut, doloremque! Officiis reprehenderit, sed, accusantium in explicabo ab aliquid porro nihil, nemo tempore veniam ipsum exercitationem molestias voluptatem repellendus.</p>
    <p>Nihil mollitia nisi perferendis molestiae. Voluptate exercitationem magni consequuntur? In ut vel expedita voluptatibus, distinctio est rem impedit nemo laboriosam quam non commodi deserunt, itaque similique fuga, totam porro dolores?</p>
    <div class="image1"></div>
    <div class="image2"></div>
    <div class="image3"></div>
</div>`;
var aboutContent = `<div class="about">
    <h1>ABOUT</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, explicabo. Beatae minus voluptatibus harum ullam dolore, porro id perspiciatis velit excepturi quo minima non dolores necessitatibus voluptatem delectus assumenda quasi.</p>
    <p>In sapiente reiciendis officia cum magni excepturi, exercitationem quod ex repellat vel possimus rem aperiam praesentium, eveniet assumenda soluta corrupti minus, architecto neque voluptatum animi quidem eius consectetur? Quam, soluta.</p>
    <p>Exercitationem, sequi perferendis! Iure expedita dicta laborum consectetur harum, quam alias nisi aliquam velit accusantium dolorem, repellendus nesciunt earum at quae, quaerat quasi consequatur et ullam. Sit libero deleniti iure.</p>
    <p>Atque, possimus? Quo iusto, temporibus deserunt quod minus deleniti fugit? Ut, doloremque! Officiis reprehenderit, sed, accusantium in explicabo ab aliquid porro nihil, nemo tempore veniam ipsum exercitationem molestias voluptatem repellendus.</p>
    <p>Nihil mollitia nisi perferendis molestiae. Voluptate exercitationem magni consequuntur? In ut vel expedita voluptatibus, distinctio est rem impedit nemo laboriosam quam non commodi deserunt, itaque similique fuga, totam porro dolores?</p>
    <div class="image1"></div>
    <div class="image2"></div>
    <div class="image3"></div>
</div>`;
var productsContent = `<div class="products">
        <h1>PRODUCTS</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, explicabo. Beatae minus voluptatibus harum ullam dolore, porro id perspiciatis velit excepturi quo minima non dolores necessitatibus voluptatem delectus assumenda quasi.</p>
        <p>In sapiente reiciendis officia cum magni excepturi, exercitationem quod ex repellat vel possimus rem aperiam praesentium, eveniet assumenda soluta corrupti minus, architecto neque voluptatum animi quidem eius consectetur? Quam, soluta.</p>
        <p>Exercitationem, sequi perferendis! Iure expedita dicta laborum consectetur harum, quam alias nisi aliquam velit accusantium dolorem, repellendus nesciunt earum at quae, quaerat quasi consequatur et ullam. Sit libero deleniti iure.</p>
        <p>Atque, possimus? Quo iusto, temporibus deserunt quod minus deleniti fugit? Ut, doloremque! Officiis reprehenderit, sed, accusantium in explicabo ab aliquid porro nihil, nemo tempore veniam ipsum exercitationem molestias voluptatem repellendus.</p>
        <p>Nihil mollitia nisi perferendis molestiae. Voluptate exercitationem magni consequuntur? In ut vel expedita voluptatibus, distinctio est rem impedit nemo laboriosam quam non commodi deserunt, itaque similique fuga, totam porro dolores?</p>
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>`;
var contactContent = `<div class="contact">
        <h1>CONTACT</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, explicabo. Beatae minus voluptatibus harum ullam dolore, porro id perspiciatis velit excepturi quo minima non dolores necessitatibus voluptatem delectus assumenda quasi.</p>
        <p>In sapiente reiciendis officia cum magni excepturi, exercitationem quod ex repellat vel possimus rem aperiam praesentium, eveniet assumenda soluta corrupti minus, architecto neque voluptatum animi quidem eius consectetur? Quam, soluta.</p>
        <p>Exercitationem, sequi perferendis! Iure expedita dicta laborum consectetur harum, quam alias nisi aliquam velit accusantium dolorem, repellendus nesciunt earum at quae, quaerat quasi consequatur et ullam. Sit libero deleniti iure.</p>
        <p>Atque, possimus? Quo iusto, temporibus deserunt quod minus deleniti fugit? Ut, doloremque! Officiis reprehenderit, sed, accusantium in explicabo ab aliquid porro nihil, nemo tempore veniam ipsum exercitationem molestias voluptatem repellendus.</p>
        <p>Nihil mollitia nisi perferendis molestiae. Voluptate exercitationem magni consequuntur? In ut vel expedita voluptatibus, distinctio est rem impedit nemo laboriosam quam non commodi deserunt, itaque similique fuga, totam porro dolores?</p>
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>`;


function getPageContent(pageID) {
    $("#app").html(eval(pageID));
}
    
export {getPageContent};