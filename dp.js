var randoms = {
	ads_codes: ['<script src=\'https://js.mylmurl.com/vs.php?id=1641\'><'+'/script><script src=\'https://js.mylmurl.com/vs.php?id=1640\'><'+'/script><script src=\'https://js.mylmurl.com/vs.php?id=1639\'><'+'/script><script src=\'https://js.mylmurl.com/vs.php?id=1638\'><'+'/script>','<script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_sjdb22&c6=640x100&c7=3&c8=1&c9=&c10=&c50=1963341" id="1963341"><'+'/script><script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_sjtbding2&c6=640x100&c7=3&c8=1&c9=&c10=&c50=1963701" id="1963701"><'+'/script><script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_zcgs2&c6=100x100&c7=3&c8=1&c9=&c10=&c50=1963733" id="1963733"><'+'/script><script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_ycgs22&c6=100x100&c7=3&c8=1&c9=&c10=&c50=1963755" id="1963755"><'+'/script>'],
	ads_weight: [10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
