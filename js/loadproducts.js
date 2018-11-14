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

		var categories =  [
			"Food",
			"Beds",
			"Leashes",
			"Cages",
			"Supplies"
		]

    	$( "[name='p1img']" ).attr("src", "products/p1.jpg");
		$( "[name='p2img']" ).attr("src", "products/p2.jpg");
		$( "[name='p3img']" ).attr("src", "products/p3.jpg");
		$( "[name='p4img']" ).attr("src", "products/p4.jpg");
		$( "[name='p5img']" ).attr("src", "products/p5.jpg");
		$( "[name='p6img']" ).attr("src", "products/p6.jpg");


		$( "[name='cat0name']" ).html(categories[0]);
		$( "[name='cat1name']" ).html(categories[1]);
		$( "[name='cat2name']" ).html(categories[2]);
		$( "[name='cat3name']" ).html(categories[3]);
		$( "[name='cat4name']" ).html(categories[4]);


  });
})(jQuery);
