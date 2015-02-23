var $products,
	$current_product = 'heal_wp';

// List all the products here

$products = {
	cuda_wp : {
		name     : 'Cuda',
		tag      : 'WordPress',
		img      : 'http://i.imgur.com/nhN1iMV.png',
		url      : 'http://demos.codexcoder.com/cuda-wp',
		purchase : 'http://www.codexcoder.com/products/cuda-free-one-page-wordpress-theme/',
		tooltip  : 'Cuda One Page HTML Template'
	},
	heal_wp : {
		name     : 'Heal',
		tag      : 'WordPress',
		img      : 'http://i.imgur.com/7JTNS49.jpg',
		url      : 'http://themes.codexcoder.com/wordpress/heal-wp/',
		purchase : 'http://themeforest.net/item/heal-multipurpose-charity-wordpress-theme/9603729?ref=codexcoder',
		tooltip  : 'Heal Charity WordPress Theme'
	},
	biz_wp : {
		name     : 'BIZ Theme',
		tag      : 'WordPress',
		img      : 'http://i.imgur.com/yMYhVWx.png',
		url      : 'http://demos.codexcoder.com/wpbiz/',
		purchase : 'http://themeforest.net/item/biz-multipurpose-business-and-corporate-theme/8886015?ref=codexcoder',
		tooltip  : 'Biz - Multipurpose Business and Corporate Theme'
	},
	signature_html : {
		name     : 'Signature',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/XQhl6zq.png',
		url      : 'http://demos.codexcoder.com/signature/',
		purchase : 'http://themeforest.net/item/signature-one-page-html-resume-template/8731815?ref=codexcoder',
		tooltip  : 'Signature - One Page HTML Resume Template'
	},
	heal_html : {
		name     : 'Heal',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/OZUsmlH.png',
		url      : 'http://demos.codexcoder.com/heal/',
		purchase : 'http://themeforest.net/item/heal-one-page-charity-html-template/8568747?ref=codexcoder',
		tooltip  : 'Heal - One Page Charity HTML Template'
	},
	
	mobiholic_html : {
		name     : 'MobiHolic',
		tag      : 'HTML',
		img      : 'http://www.codexcoder.com/wp-content/uploads/2014/08/Banner_Mobiholic.jpg',
		url      : 'http://demos.codexcoder.com/Mobiholic/',
		purchase : 'http://themeforest.net/item/mobiholic-ultimate-app-landing-business-template/8332395?ref=codexcoder',
		tooltip  : 'MobiHolic - Ultimate App Landing Business Template'
	},

	xstream_html : {
		name     : 'XSTREAM',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/VPNgpRM.png',
		url      : 'http://demos.codexcoder.com/xstream-html/',
		purchase : 'http://themeforest.net/item/xstream-responsive-html5-portfolio-template/8026998?ref=codexcoder',
		tooltip  : 'XStream - Responsive HTML5 Portfolio Template'
	},
	biz_html : {
		name     : 'BIZ',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/yMYhVWx.png',
		url      : 'http://demos.codexcoder.com/biz-demo/',
		purchase : 'http://themeforest.net/item/biz-one-page-parallax-html-template/7893623?ref=codexcoder',
		tooltip  : 'BIZ - One Page Parallax HTML Template'
	},
	boom_html : {
		name     : 'BOOM',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/PQmkADD.jpg',
		url      : 'http://demos.codexcoder.com/boom-html/',
		purchase : 'http://themeforest.net/item/boom-multipurpose-responsive-html-template/7606220?ref=codexcoder',
		tooltip  : 'BOOM - Multi-Purpose Responsive HTML Template'
	},
	
	daily_news : {
		name     : 'Daily News',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/UsYSmvs.png',
		url      : 'http://demos.codexcoder.com/themes/dailynews/',
		purchase : 'http://www.codexcoder.com/products/ccr-daily-news-magazine-multipurpose-wp-theme/',
		tooltip  : 'CCR Daily News, Magazine- Multipurpose HTML Template'
	},

	daily_news_wp : {
		name     : 'Daily News WP',
		tag      : 'WordPress',
		img      : 'http://i.imgur.com/UsYSmvs.png',
		url      : 'http://demos.codexcoder.com/themes/dailynews/',
		purchase : 'http://www.codexcoder.com/products/ccr-daily-news-magazine-multipurpose-wp-theme/',
		tooltip  : 'CCR Daily News, Magazine- Multipurpose WordPress Theme'
	},
	
	limo : {
		name     : 'Limo',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/xKea0Uf.png',
		url      : 'http://demos.codexcoder.com/limo-html',
		purchase : 'http://www.codexcoder.com/products/ccr-limo-free-html-template/',
		tooltip  : 'CCR Limo Free HTML Template'
	},
	
	cuda: {
		name     : 'Cuda',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/nhN1iMV.png',
		url      : 'http://demos.codexcoder.com/cuda-html',
		purchase : 'http://www.codexcoder.com/products/cuda-one-page-html-template/',
		tooltip  : 'Cuda One Page HTML Template'
	},
	
	kelaud: {
		name     : 'Kelaud',
		tag      : 'HTML',
		img      : 'http://i.imgur.com/Dyc9MU8.png',
		url      : 'http://demos.codexcoder.com/kelaud-html',
		purchase : 'http://www.codexcoder.com/products/kelaud-one-page-html-responsive-template/',
		tooltip  : 'Kelaud One Page Template'
	},
	
	limo_wp: {
		name     : 'Limo',
		tag      : 'WordPress',
		img      : 'http://i.imgur.com/xKea0Uf.png',
		url      : 'http://demos.codexcoder.com/themes/wp-limo/',
		purchase : 'http://www.codexcoder.com/products/ccr-limo-free-wordpress-template/',
		tooltip  : 'CCR Limo Free WordPress Template'
	},
	
	stylo_wp: {
		name     : 'Stylo',
		tag      : 'WordPress',
		img      : 'http://i.imgur.com/MW1GsfU.png',
		url      : 'http://demos.codexcoder.com/themes/stylo/',
		purchase : 'http://www.codexcoder.com/products/ccr-stylo-wordpress-theme/',
		tooltip  : 'CCR Stylo WordPress Theme'
	}

};