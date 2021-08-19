var randoms = {
	ads_codes: ['<script src=\'https://js.mylmurl.com/vs.php?id=1641\'><'+'/script><script src=\'https://js.mylmurl.com/vs.php?id=1640\'><'+'/script><script src=\'https://js.mylmurl.com/vs.php?id=1639\'><'+'/script><script src=\'https://js.mylmurl.com/vs.php?id=1638\'><'+'/script>','<script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_sjdb22&c6=640x100&c7=3&c8=1&c9=&c10=&c50=1550850" id="1550850"><'+'/script><script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_sjtbding2&c6=640x100&c7=3&c8=1&c9=&c10=&c50=1550870" id="1550870"><'+'/script><script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_zcgs2&c6=100x100&c7=3&c8=1&c9=&c10=&c50=1550920" id="1550920"><'+'/script><script async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7273&c3=&c4=2&c5=AdCode_ycgs22&c6=100x100&c7=3&c8=1&c9=&c10=&c50=1550938" id="1550938"><'+'/script>','<script src="https://www.govxian.cn:12443/ty/A4346096-9914-16268-34-5A6249F88E4D.alpha"><'+'/script><script src="https://www.govxian.cn:12443/ty/121F18B7-5A61-16269-33-B90ECCFE0636.alpha"><'+'/script><script src="https://www.govxian.cn:12443/ty/99E9F3DA-1116-16270-24-EA2C972B80D5.alpha"><'+'/script>'],
	ads_weight: [10,10,10],
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

