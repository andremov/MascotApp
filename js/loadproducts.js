(function($){
  $(function(){

		var names = [
			"Aspen Pet Self-Warming Corduroy Pet Bed Several Shapes Assorted Colors",
			"AmazonBasics Stainless Steel Dog Bowl - Set of 2",
			"Blue Buffalo Wilderness High Protein Grain Free, Natural Adult Toy Breed Dry Dog Food, Chicken 4-lb",
			"Best Friends by Sheri DNT-SHG-TAU-2323-VP Luxury Shag Fuax Fur Donut Cuddler (Multiple Sizes) � Cat and Dog B23 x23, Taupe",
			"Rabbitgoo Dog Harness No-Pull Pet Harness Adjustable Outdoor Pet Vest 3M Reflective Oxford Material Vest for Dogs Easy Control for Small Medium Large Dogs...",
			"MidWest Foldable Metal Exercise Pen / Pet Playpen. Black w/ door, 24\"W x 30\"H",
			"ALAZCO 12pc BPA-Free Can Covers - 2 Large 2 Medium 8 Small Plastic Tight Seal Lids for Canned Goods or Pet Dog Cat Food Food Saver Reusable",
			"IRIS 2-Tier Small Animal Wire Cage",
		]

		var prices = [
			"$59.99",
			"$29.99",
			"$74.99",
			"$54.99",
			"$32.99",
			"$169.99",
			"34.99",
			"119.99",
		]

		var categories =  [
			"Food",
			"Beds",
			"Leashes",
			"Cages",
			"Supplies"
		]

		var productCards = [
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p0img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p0name"></a><br><span name="p0price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p1img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p1name"></a><br><span name="p1price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p2img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p2name"></a><br><span name="p2price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p3img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p3name"></a><br><span name="p3price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p4img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p4name"></a><br><span name="p4price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p5img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p5name"></a><br><span name="p5price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p6img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p6name"></a><br><span name="p6price"></span></div><div class="btn flat">Add to Cart</div></div>',
			'<div class="card"><div class="img" style="height: 200px"><img src="assets/ph.png" name="p7img"></div><div class="details"><a href="product-detail.html" class="" style="height:50px" name="p7name"></a><br><span name="p7price"></span></div><div class="btn flat">Add to Cart</div></div>',
		]

		$( "[name='card0']" ).replaceWith(productCards[0]);
		$( "[name='card1']" ).replaceWith(productCards[1]);
		$( "[name='card2']" ).replaceWith(productCards[2]);
		$( "[name='card3']" ).replaceWith(productCards[3]);
		$( "[name='card4']" ).replaceWith(productCards[4]);
		$( "[name='card5']" ).replaceWith(productCards[5]);
		$( "[name='card6']" ).replaceWith(productCards[6]);
		$( "[name='card7']" ).replaceWith(productCards[7]);



    	$( "[name='p0img']" ).attr("src", "products/p1.jpg");
		$( "[name='p1img']" ).attr("src", "products/p2.jpg");
		$( "[name='p2img']" ).attr("src", "products/p3.jpg");
		$( "[name='p3img']" ).attr("src", "products/p4.jpg");
		$( "[name='p4img']" ).attr("src", "products/p5.jpg");
		$( "[name='p5img']" ).attr("src", "products/p6.jpg");
		$( "[name='p6img']" ).attr("src", "products/p7.jpg");
		$( "[name='p7img']" ).attr("src", "products/p8.jpg");

		$( "[name='p0name']" ).html(names[0]);
    	$( "[name='p1name']" ).html(names[1]);
		$( "[name='p2name']" ).html(names[2]);
		$( "[name='p3name']" ).html(names[3]);
		$( "[name='p4name']" ).html(names[4]);
		$( "[name='p5name']" ).html(names[5]);
		$( "[name='p6name']" ).html(names[6]);
		$( "[name='p7name']" ).html(names[7]);

		$( "[name='p0price']" ).html(prices[0]);
    	$( "[name='p1price']" ).html(prices[1]);
		$( "[name='p2price']" ).html(prices[2]);
		$( "[name='p3price']" ).html(prices[3]);
		$( "[name='p4price']" ).html(prices[4]);
		$( "[name='p5price']" ).html(prices[5]);
		$( "[name='p6price']" ).html(prices[6]);
		$( "[name='p7price']" ).html(prices[7]);

		$( "[name='cat0name']" ).html(categories[0]);
		$( "[name='cat1name']" ).html(categories[1]);
		$( "[name='cat2name']" ).html(categories[2]);
		$( "[name='cat3name']" ).html(categories[3]);
		$( "[name='cat4name']" ).html(categories[4]);


  });
})(jQuery);
